export * from './auth.service';
import { AuthService } from './auth.service';
export * from './deals.service';
import { DealsService } from './deals.service';
export * from './default.service';
import { DefaultService } from './default.service';
export * from './users.service';
import { UsersService } from './users.service';
export const APIS = [AuthService, DealsService, DefaultService, UsersService];
