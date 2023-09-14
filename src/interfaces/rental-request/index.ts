import { UserInterface } from 'interfaces/user';
import { ToolInterface } from 'interfaces/tool';
import { GetQueryInterface } from 'interfaces';

export interface RentalRequestInterface {
  id?: string;
  start_date: any;
  end_date: any;
  status: string;
  user_id: string;
  tool_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  tool?: ToolInterface;
  _count?: {};
}

export interface RentalRequestGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  user_id?: string;
  tool_id?: string;
}
