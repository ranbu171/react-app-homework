import Tabs from './components/Tabs/Tabs';
import Select from './components/Select/select';
import Posts from './posts/posts';


function App() {
  // for Tabs
  const options = [{ label: 'Tab one', value: '1' },
  { label: 'Tab two', value: '2' },
  { label: 'Tab three', value: '3' }]

 console.log('App Test')
  return (
    <div id="app" >
      <Tabs options={options} />
      <Select />
      <Posts />
    </div>
  );
}

export default App;