type IconPanelProps = {
    children: React.ReactNode;
  };
  
  const IconPanel: React.FC<IconPanelProps> = ({ children }) => {
    return (
      <div className="flex justify-center items-center border-2 rounded-lg p-4 space-x-4">
        {children}
      </div>
    );
  };
  
  export default IconPanel;
  