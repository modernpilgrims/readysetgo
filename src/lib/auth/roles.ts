export const ROLES = {
  ANONYMOUS:     'anonymous',
  AUTHENTICATED: 'authenticated',
  CLIENT:        'client',
  EDITOR:        'editor',
  ADMIN:         'admin',
} as const

export type Role = typeof ROLES[keyof typeof ROLES]

export const ADMIN_ROLES: Role[] = [ROLES.ADMIN, ROLES.EDITOR]
