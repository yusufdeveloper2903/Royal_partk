export type SearchCriteria = {
  /** `YYYY-MM-DD` */
  checkIn: string;
  /** `YYYY-MM-DD` */
  checkOut: string;
  guests: string;
};

export type SearchErrors = Partial<Record<keyof SearchCriteria, string>>;
