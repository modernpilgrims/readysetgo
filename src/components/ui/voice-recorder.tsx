"use client"

import { useState, useRef } from "react"

type Props = {
    onComplete: (blob: Blob) => void
}

export function VoiceRecorder({ onComplete }: Props) {
    const [recording, setRecording] = useState(false)
    const [time, setTime] = useState(0)

    const mediaRecorderRef = useRef<MediaRecorder | null>(null)
    const chunksRef = useRef<Blob[]>([])
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    const MAX_DURATION = 120 // секунд

    async function startRecording() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true })

            const mediaRecorder = new MediaRecorder(stream)
            mediaRecorderRef.current = mediaRecorder
            chunksRef.current = []

            mediaRecorder.ondataavailable = (e) => {
                if (e.data.size > 0) {
                    chunksRef.current.push(e.data)
                }
            }

            mediaRecorder.onstop = () => {
                const blob = new Blob(chunksRef.current, { type: "audio/webm" })
                onComplete(blob)
                setTime(0)
            }

            mediaRecorder.start()
            setRecording(true)

            // ⏱ таймер
            timerRef.current = setInterval(() => {
                setTime((t) => {
                    if (t >= MAX_DURATION) {
                        stopRecording()
                        return t
                    }
                    return t + 1
                })
            }, 1000)

        } catch (err) {
            console.error("Mic error:", err)
        }
    }

    function stopRecording() {
        mediaRecorderRef.current?.stop()
        setRecording(false)

        if (timerRef.current) {
            clearInterval(timerRef.current)
        }
    }

    // 📱 mobile hold
    function handleTouchStart() {
        startRecording()
    }

    function handleTouchEnd() {
        stopRecording()
    }

    // 💻 desktop tap
    function handleClick() {
        if (recording) stopRecording()
        else startRecording()
    }

    return (
        <div className="flex flex-col items-center gap-2">

            <button
                onMouseDown={handleClick}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                className={`w-14 h-14 rounded-full flex items-center justify-center text-white transition
        ${recording ? "bg-red-500 animate-pulse" : "bg-black"}`}
            >
                🎙
            </button>

            <div className="text-xs text-black/50">
                {recording
                    ? `Recording... ${time}s`
                    : "Hold or tap to record"}
            </div>

        </div>
    )
}