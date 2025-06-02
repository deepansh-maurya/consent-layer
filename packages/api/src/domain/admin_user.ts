// /src/domain/AdminUser.ts
export class AdminUser {
  constructor(
    public id: string,
    public orgId: string,
    public email: string,
    public passwordHash: string,
    public role: 'owner' | 'admin' | 'viewer',
    public createdAt: Date,
    public updatedAt: Date,
  ) {}

  changeRole(newRole: 'owner' | 'admin' | 'viewer') {
    this.role = newRole;
    this.updatedAt = new Date();
  }
}
