interface InputSearchProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

const InputSearch: React.FC<InputSearchProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default InputSearch;
