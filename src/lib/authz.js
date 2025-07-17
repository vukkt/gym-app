// src/lib/authz.js
/**
 * Checks if a user has the COACH or ADMIN role.
 * @param {import('@prisma/client').User | null | undefined} user
 * @returns {boolean}
 */
export function isCoach(user) {
  return user?.role === 'COACH' || user?.role === 'ADMIN';
}
