type FilterProps = {
  filter: string,
  setFilter: (setFilter: string) => void;
}

const Filter = ({filter, setFilter} : FilterProps) => {
  return (
    <div className="bg-[#25273C] text-[#ffffff96] focus:outline-none w-100 py-3 px-5 rounded-lg">
      <div className="flex gap-10 justify-around ">
        <p className="text-lg text-white">Status:</p>

        <select className="bg-[#25273C] text-[#ffffff96] focus:outline-none w-100" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Complete">Complete</option>
          <option value="Incomplete">Incomplete</option>
        </select>
      </div>
    </div>
  )
}

export default Filter