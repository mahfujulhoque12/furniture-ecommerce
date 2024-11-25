import MenuItem from "@/components/navbar/MenuItem";

// Define the type for each submenu item
interface SubmenuItem {
  label: string;
  href: string;
}

// Define the type for each nested menu section
interface NestedMenu {
  heading: string;
  submenu: SubmenuItem[];
}

// Define the type for the main menu item
interface MenuDataItem {
  label: string;
  href: string;
  nestedMenu?: NestedMenu[]; // Optional because not all menu items have nested menus
}

// Correct menuData type to be an array of MenuDataItem

const menuData: MenuDataItem[] = [
  { label: "Home", href: "/" },
  {
  
    label: "House Furniture",
    href: "/house-furniture",
    nestedMenu: [
      {
        heading: "Interiors",
        submenu: [
          { label: "House Chair", href: "#" },
          {
            label: "House Table",
            href: "/house-furniture",
          },
        
        ],
      },
      {
        heading: "Interiors",
        submenu: [
          {
            label: "House Cabinet",
            href: "/house-furniture",
          },
          { label: "House Sofa", href: "#" },
        ],
      },
      {
        heading: "Interiors",
        submenu: [
          { label: "House Waredrobe", href: "#" },
          {
            label: "House Corner Shelf",
            href: "/house-furniture",
          },
        ],
      },
    ],
  },
  {
    label: "Office Furniture ",
    href: "/office-furniture",
    nestedMenu: [
      {
        heading: "Design Ideas",
        submenu: [
          { label: "Office Chair", href: "/office-furniture" },
          {
            label: "Office Sofa",
            href: "/office-furniture",
          },
         
        ],
      },
      {
        heading: "Design Ideas",
        submenu: [
          { label: "Office File Cabinet", href: "/office-furniture" },
          {
            label: "Office Work Station",
            href: "/office-furniture",
          },
 
        ],
      },
      {
        heading: "Design Ideas",
        submenu: [
          { label: "Office Table", href: "/office-furniture" },
          { label: "Office Book Shelf", href: "/office-furniture" },

        ],
      },
    ],
  },
 
  {
    label: "Shop ",
    href: "/shop",
    nestedMenu: [
      {
        heading: "Furniture Category",
        submenu: [
          { label: "House Furniture", href: "/house-furniture" },
          { label: "Office Furniture",href: "/office-furniture", },
          { label: "Wall Art & Mirrors",href: "/wall-art-mirrors", },
          { label: "Curtains & Blinds",href: "/curtains-blinds", },
          { label: "Rugs & Mats",href: "/rugs-mats", },
          { label: "Lighting Solutions",href: "/lighting-solutions", },
          { label: "Compact & Space-Saving Furniture",href: "/compact-space-saving-furniture",},
        ],
      },

     {
        heading: "Furniture Category",
        submenu: [
          { label: "Multi-Functional Furniture", href: "/multi-functional-furniture" },
          { label: "Rattan & Bamboo Furniture",href: "/rattan-bamboo-furniture", },
          { label: "Leather Furniture",href: "/leather-furniture", },
          { label: "Fabric Furniture",href: "/fabric-furniture", },
          { label: "Glass Furniture",href: "/glass-furniture", },
          { label: "Metal Furniture",href: "/metal-furniture", },
          { label: "Wooden Furniture",href: "/wooden-furniture",},
        ],
      },

      {
        heading: "Furniture Category",
        submenu: [
          { label: "Luxury Furniture", href: "/luxury-furniture" },
          { label: "Scandinavian Furniture",href: "/scandinavian-furniture", },
          { label: "Classic Furniture",href: "/classic-furniture", },
          { label: "Modern Furniture",href: "/modern-furniture", },
          { label: "TV Units & Media Stands",href: "/tv-units", },
          { label: "Entryway Furniture",href: "/entryway-furniture", },
          { label: "Kid's Furniture",href: "/kids-furniture",},
          { label: "Outdoor Furniture",href: "/outdoor-furniture",},
        ],
      },

    ],
  },

  {
    label: "Category ",
    href: "/category",
    nestedMenu: [
      {
        heading: "Furniture Category",
        submenu: [
          { label: "House Furniture", href: "/house-furniture" },
          { label: "Office Furniture",href: "/office-furniture", },
          { label: "Wall Art & Mirrors",href: "/wall-art-mirrors", },
          { label: "Curtains & Blinds",href: "/curtains-blinds", },
          { label: "Rugs & Mats",href: "/rugs-mats", },
          { label: "Lighting Solutions",href: "/lighting-solutions", },
          { label: "Compact & Space-Saving Furniture",href: "/compact-space-saving-furniture",},
        ],
      },

     {
        heading: "Furniture Category",
        submenu: [
          { label: "Multi-Functional Furniture", href: "/multi-functional-furniture" },
          { label: "Rattan & Bamboo Furniture",href: "/rattan-bamboo-furniture", },
          { label: "Leather Furniture",href: "/leather-furniture", },
          { label: "Fabric Furniture",href: "/fabric-furniture", },
          { label: "Glass Furniture",href: "/glass-furniture", },
          { label: "Metal Furniture",href: "/metal-furniture", },
          { label: "Wooden Furniture",href: "/wooden-furniture",},
        ],
      },

      {
        heading: "Furniture Category",
        submenu: [
          { label: "Luxury Furniture", href: "/luxury-furniture" },
          { label: "Scandinavian Furniture",href: "/scandinavian-furniture", },
          { label: "Classic Furniture",href: "/classic-furniture", },
          { label: "Modern Furniture",href: "/modern-furniture", },
          { label: "TV Units & Media Stands",href: "/tv-units", },
          { label: "Entryway Furniture",href: "/entryway-furniture", },
          { label: "Kid's Furniture",href: "/kids-furniture",},
          { label: "Outdoor Furniture",href: "/outdoor-furniture",},
        ],
      },

    ],
  },



  { label: "About Us", href: "/about-us" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },

];
// Define the props for the MegaMenu component
interface MegaMenuProps {
  handleToggle?: (index: number) => void; // Optional function to handle toggle
  clicked?: number; // Index of the currently clicked item
  setIsDrawerOpen?: (isOpen: boolean) => void; // Optional function to set drawer state
}

const MegaMenu: React.FC<MegaMenuProps> = ({
  handleToggle,
  clicked,
  setIsDrawerOpen,
}) => {
  return (
    <div className="nav__container">
      <nav>
        <ul className="lg:flex lg:items-center lg:leading-[50px]">
          {menuData.map(({ label, href, nestedMenu }, index) => {
            return (
              <MenuItem
                key={index}
                label={label}
                href={href}
                nestedMenu={nestedMenu}
                setIsDrawerOpen={setIsDrawerOpen}
                onToggle={() => handleToggle && handleToggle(index)}
                active={clicked === index}
              />
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default MegaMenu;
