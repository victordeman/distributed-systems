export interface StaffMember {
  name: string;
  role: string;
  title: string;
  imageUrl: string;
  education?: string[];
}

export const staff: StaffMember[] = [
  {
    name: "Ekpe Okorafor",
    role: "Instructor",
    title: "PROF. Ekpe Okorafor",
    imageUrl: "/images/staff/ekpe-okorafor.jpg",
    education: [
      "B.Sc. Electronic Engr. (UNN)",
      "M.Sc. Comp. Eng. (Texas A&M)",
      "Ph.D. Comp. Eng. (Texas A&M)"
    ]
  },
  {
    name: "Chukwuka Victor Obionwu",
    role: "Instructor",
    title: "Dr.-Ing Chukwuka Victor Obionwu",
    imageUrl: "/images/staff/victor-obionwu.jpg"
  }
];
