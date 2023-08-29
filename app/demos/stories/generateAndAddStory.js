'use client'
const generateAndAddStory = async (metaData) => {
  const answers = metaData;
  const genderString = answers.gender === 'female' ? ' girl child' : answers.gender === 'male' ? 'boy child' : 'child';
  let data;
  let res;
  // return {data: `Generate a short ${answers.category} children story for a ${answers.age} year old ${genderString} named ${answers.name} that is learning a lesson about ${answers.lesson}`, error: null}
  try {
    res = await fetch('https://dpojactvu7.execute-api.us-east-1.amazonaws.com/kid-stories/createStory', {
      method: 'POST',
      body: JSON.stringify({ content: `Generate a short ${answers.category} children story for a ${answers.age} year old ${genderString} named ${answers.name} that is learning a lesson about ${answers.lesson}`}),
    });
  }
  catch (e) {
    return {data: null, error: "There was a timeout error generating your story. Please try again."}
  }
  if (res){
    try {
      data = await res.json();
    }
    catch (e){
      return {data: null, error: "There was a timeout error generating your story. Please try again."}
    }
    if(data){
      const questionsAndAnswers = {name: answers.name, age: answers.age, category: answers.category, lesson: answers.lesson, gender: answers.gender}
      await fetch('https://dpojactvu7.execute-api.us-east-1.amazonaws.com/kid-stories/addStory', {
        method: 'POST',
        body: JSON.stringify({ content: data.message, questionsAndAnswers:questionsAndAnswers}),
      });
      const storyContent = data.message
      await fetch('/api/revalidate/?tag=thumbnail-story')
      return {data: storyContent, error:null}

    }
  }
}
export default generateAndAddStory