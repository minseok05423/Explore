import { useState, useEffect } from 'react';
import useDeepseekAPI from './hooks/useDeepseekAPI';
import SuggestionNode from './components/SuggestionNode';
import Node from './components/Node';
import Searchbar from './components/Searchbar';

function App() {
  const { CallDeepseek } = useDeepseekAPI();
  const [searchInput, setSearchInput] = useState('');
  const [context, setContext] = useState<string[]>([]);
  const [deepseekResponse, setDeepseekResponse] = useState();

  const HandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newContext = [...context, searchInput];
    setContext(newContext);

    const FetchData = async () => {
      const response = await CallDeepseek(newContext);
      console.log(response);

      const content = response.choices[0].message.content.split(', ');
      setDeepseekResponse(content);
    };
    FetchData();
    // you cannot immediately call an async function
  };

  return (
    <>
      <Searchbar
        HandleSubmit={HandleSubmit}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      {deepseekResponse && <div>{deepseekResponse[0]}</div>}
      <div className="w-[500px] h-[500px] border">
        <Node />
      </div>
    </>
  );
}
// do not call functions immediately!!!

export default App;
