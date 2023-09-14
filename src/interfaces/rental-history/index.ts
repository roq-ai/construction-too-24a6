import { UserInterface } from 'interfaces/user';
import { ToolInterface } from 'interfaces/tool';
import { GetQueryInterface } from 'interfaces';

export interface RentalHistoryInterface {
  id?: string;
  start_date: any;
  end_date: any;
  user_id: string;
  tool_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  tool?: ToolInterface;
  _count?: {};
}

export interface RentalHistoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  tool_id?: string;
}
