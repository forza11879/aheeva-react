import { format } from 'date-fns';

export const COLUMNS = [
  {
    Header: 'Timestamp',
    Footer: 'Timestamp',
    accessor: 'timestamp',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy');
    },
  },
  {
    Header: 'Call ID',
    Footer: 'Call ID',
    accessor: 'id',
    disableFilters: true,
    sticky: 'left',
  },
  {
    Header: 'Duration',
    Footer: 'Duration',
    accessor: 'duration',
  },
];
