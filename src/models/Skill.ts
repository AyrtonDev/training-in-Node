type ListProps = {
  title: string;
  level: string;
};

const data: ListProps[] = [
  { title: "node", level: "Iniciante" },
  { title: "react", level: "intermediario" },
  { title: "Html/css", level: "intermediario" },
];

export const Skill = {
  getAll: (): ListProps[] => {
    return data;
  },
  getStarter: (term: string): ListProps[] => {
    return data.filter((item) => item.level == term);
  },
};
