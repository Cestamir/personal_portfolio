"use client"

interface GridCardProps{
    gridCardText: string;
    gridCardIcon: string;
    gridCardHeader: string;
    gridCardSize: "small" | "medium" | "large";
}

const Card = ({gridCardText,gridCardIcon,gridCardHeader,gridCardSize} : GridCardProps) => {

    const getSizeClass = () => {
    switch(gridCardSize) {
      case 'large':
        return 'col-span-2 row-span-2 min-h-[200px]';
      case 'medium':
        return 'col-span-2 row-span-1 min-h-[150px]';
      case 'small':
      default:
        return 'col-span-1 row-span-1 min-h-[100px]';
    }
  };


  return (
    <div id="grid-card" className={`${getSizeClass()} h-full w-full shadow-lg overflow-hidden rounded-lg p-6 flex flex-col`}>
        <div className="text-white">{gridCardIcon} - {gridCardHeader}</div>
        <p>{gridCardText}</p>
    </div>
  )
}

export default Card