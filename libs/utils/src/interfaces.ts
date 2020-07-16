import { faUser } from '@fortawesome/free-regular-svg-icons';
import { MenuOptions } from '@utils/enums';

export interface NavbarOption {
  icon: typeof faUser;
  title: string;
  route: string;
  option: MenuOptions;
}
