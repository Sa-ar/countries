interface SearchInputProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: React.FC<SearchInputProps> = ({
  searchValue = "",
  setSearchValue,
}) => {
  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };

  return (
    <div className="flex items-center justify-center w-full">
      <input
        type="text"
        placeholder="Search by country name"
        value={searchValue}
        onChange={handleInputChange}
        className="px-4 py-2 text-gray-700 w-full bg-white border-2 border-gray-300 rounded shadow"
      />
    </div>
  );
};

export default SearchInput;
