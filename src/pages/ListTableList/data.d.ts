export interface TableListItem {
  id: number;
  status: number;
  network: string;
  listen_address: string;
  listen_port: number;
  target_address: string;
  target_port: number;
}

export interface TableListPagination {
  total: number;
  pageSize: number;
  current: number;
}

export interface TableListData {
  list: TableListItem[];
  pagination: Partial<TableListPagination>;
}

export interface TableListParams {
  id?: number;
  status?: number;
  network?: string;
  listen_address?: string;
  listen_port?: number;
  target_address?: string;
  target_port?: number;
  pageSize?: number;
  currentPage?: number;
  filter?: { [key: string]: any[] };
  sorter?: { [key: string]: any };
}
