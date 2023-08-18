

export default async function ViewAllBucketLists({}) { 
  const req = await fetch(`https://dpojactvu7.execute-api.us-east-1.amazonaws.com/getBucketList`)
  const bucketListsJson = await req.json();
  console.log(bucketListsJson)
  const renderBucketListWrapper = () => {
    return bucketListsJson.items.map((data, i) => {
      return <ol  key={i}  className='list-decimal divide-y z-10 mx-1 my-2 relative px-8 border rounded-[20px] border-gray-200'>
      {renderBucketList(data.content)}</ol>
  })
  }
  const renderBucketList = (listContent) => {
    const filterWord = /bucket|Bucket/;
    const listContentArray = listContent.split(/[0-9]+\./);
    return listContentArray.map((data, i) => {
     if (data.length > 0 && !filterWord.test(data)) {
      return <li  key={i}  className="py-2 pl-1 text-xs font-normal leading-6 text-gray-900">
      {data}</li>
     }
     null;
  })
  }
  return (
      <div className={''}>
        <div className="grid-cols-3 grid auto-cols-fr	 	">{renderBucketListWrapper()}</div>
      </div>

  )
}