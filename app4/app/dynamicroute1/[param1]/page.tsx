export default async function Home({params}){
  return <h1>{(await params).param1}bellow</h1>
}
