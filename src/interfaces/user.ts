interface IProfile {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  gender: string;
  bvn: string;
  address: string;
  currency: string;
}

interface IGuarantor {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  address: string;
}

interface ISocials {
  facebook: string;
  instagram: string;
  twitter: string;
}

interface IEducation {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: string[];
  loanRepayment: string;
}

interface IUser {
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: IProfile;
  guarantor: IGuarantor;
  accountBalance: string;
  accountNumber: string;
  socials: ISocials;
  education: IEducation;
  id: string;
}

export default IUser;
