type RefundAPiResponse = {
  id: string;
  userID: string;
  name: string;
  category: CategoriesAPIEnum;
  amount: number;
  filename: string;
  user: { name: string };
};

type RefundsPaginationAPIResponse = {
  refunds: RefundAPiResponse[];
  pagination: {
    page: number;
    perPage: number;
    totalRecords: number;
    totalPages: number;
  };
};
