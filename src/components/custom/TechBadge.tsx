import { Badge } from "../ui/badge";

const CDN = "https://cdn.simpleicons.org/";

interface TechBadgeProps extends React.ComponentProps<typeof Badge> {
  tech: string;
  icon?: boolean;
}

export const TechBadge = ({
  className,
  tech,
  icon,
  ...props
}: TechBadgeProps) => {
  return (
    <Badge
      title={tech}
      className={`${className} pl-1 pr-1 font-[inconsolata]`}
      {...props}
    >
      <img src={`${CDN}${tech}`} width="16px" />
      {!icon && tech}
    </Badge>
  );
};
