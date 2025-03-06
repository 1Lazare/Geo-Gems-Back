import { UserRole } from 'src/enums/user-role.enum';

export interface UserInterface {
  id: number;
  role: UserRole;
}
