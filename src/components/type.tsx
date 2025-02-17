export interface visitDataProps {
  pagename: string;
  visitors: number;
  uniqueusers: number;
  bouncerate: number;
}

export interface traficDataProps {
  referral: string;
  visitors: number;
  barrate: number;
}

export interface cardDatasProps {
  card: string;
  last: number;
  data: number;
}

export interface authorsDataProps {
  name: string;
  photo: string;
  mail: string;
  rank: string;
  unit: string;
  status: boolean;
  employeddate: string;
}

export interface projectsDataProps {
  companies: string;
  budget: number;
  status: string;
  completion: string;
}

export interface paymentInfoProps {
  cardtype: string;
  data: number;
}

export interface paymentMethodProps {
  cardtype: string;
  name: string;
  cardnumber: number;
  validthru: string;
  cvv: number;
}

export interface billingInformationProps {
  name: string;
  companyname: string;
  email: string;
  vatnumber: string;
}

export interface paymentInvoicesProps {
  id: string;
  date: string;
  amount: number;
}

export interface userDataProps {
  photo: string;
  name: string;
  mail: string;
  information: string;
  fullname: string;
  number: string;
  location: string;
  socialmedia: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
  projects: {
    id: string;
    title: string;
    image: string;
    desc: string;
  };
  converstations: {
    image: string;
    name: string;
    comment: string;
  };
}

export interface salesOverviewProps {
  month: string;
  desktop: number;
  mobile: number;
}

export interface performanceProps {
  month: string;
  desktop: number;
}
