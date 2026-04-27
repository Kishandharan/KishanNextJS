export default function Home({params}){
  let var1;  
  params.then(value => {var1 = value.param1});
  return <h1>{var1}</h1>
}
