import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  light?: boolean;
}

const Breadcrumbs = ({ items, light = false }: BreadcrumbsProps) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRight 
                  className={`h-4 w-4 mx-1 ${light ? 'text-white/60' : 'text-neutral-400'}`}
                />
              )}
              
              {isLast ? (
                <span className={`${light ? 'text-white' : 'text-neutral-600'}`}>
                  {item.label}
                </span>
              ) : (
                <Link 
                  to={item.path}
                  className={`hover:underline ${
                    light ? 'text-white/80 hover:text-white' : 'text-neutral-500 hover:text-primary-600'
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;