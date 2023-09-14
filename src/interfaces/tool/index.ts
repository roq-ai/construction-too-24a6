import { RentalHistoryInterface } from 'interfaces/rental-history';
import { RentalRequestInterface } from 'interfaces/rental-request';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface ToolInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  availability_status?: boolean;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  rental_history?: RentalHistoryInterface[];
  rental_request?: RentalRequestInterface[];
  company?: CompanyInterface;
  _count?: {
    rental_history?: number;
    rental_request?: number;
  };
}

export interface ToolGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  company_id?: string;
}
