import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag: "Full Time",
      tag2: "Junior Level",
      pay: "$120,000 / year",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "2 days ago",
      post: "React Engineer",
      tag: "Full Time",
      tag2: "Senior Level",
      pay: "$160,000 / year",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "1 day ago",
      post: "Backend Developer",
      tag: "Part Time",
      tag2: "Junior Level",
      pay: "$70,000 / year",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "7 days ago",
      post: "iOS Engineer",
      tag: "Full Time",
      tag2: "Senior Level",
      pay: "$180,000 / year",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "3 days ago",
      post: "Full Stack Engineer",
      tag: "Full Time",
      tag2: "Mid Level",
      pay: "$150,000 / year",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Cloud Developer",
      tag: "Full Time",
      tag2: "Junior Level",
      pay: "$110,000 / year",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/openai.com",
      companyName: "OpenAI",
      datePosted: "6 days ago",
      post: "AI Research Assistant",
      tag: "Part Time",
      tag2: "Intern Level",
      pay: "$60,000 / year",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      datePosted: "8 days ago",
      post: "Software Engineer",
      tag: "Full Time",
      tag2: "Senior Level",
      pay: "$170,000 / year",
      location: "Mumbai, India",
    },
  ];

  console.log(jobOpenings);

  return (
    <div className="parent">
      {jobOpenings.map(function (elem,idx) {
        return (
          <div key={idx}><Card
            company={elem.companyName}
            post={elem.post}
            tag1={elem.tag}
            tag2={elem.tag2}
            brandlogo={elem.brandLogo}
            pay={elem.pay}
            location={elem.location}
            posted={elem.datePosted}
          /></div>
        );
      })}
    </div>
  );
};

export default App;
