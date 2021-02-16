window.onload = function(){
  const listFunction = (arr, ul) => {
    for(let i = 0; i < arr.length; i++){
      const list = document.createElement("li");
      const text = document.createTextNode(arr[i]);
      list.appendChild(text);
      list.style.fontSize = "18px";
      ul.appendChild(list);
    }
  }

  const pythonFeature = [
    "Open-source programming language",
    "Extensive support modules and community development",
    "Easy integration with web services",
    "User-friendly data structures",
    "GUI-based desktop applications"
  ];
  const feature = document.getElementById("pythonFeature");
  listFunction(pythonFeature, feature);

  const pythonDemand = [
    "Python-based web development frameworks like Django, Pyramid, and Turbo Gear are easy to learn, feature-packed and popular",
    "It has packages such as NumPy and SciPy that are commonly used in the fields of scientific computing, mathematics, and engineering",
    "Its application in sophisticated deep learning and machine learning makes it a great choice for the academically inclined",
    "Has a wide range of applications like creating famous video games, developing 2D imaging as well as 3D animation packages",
    "Highly demanding in the job market with over 894k GitHub repositories and an average salary of python developer is $120,000 in USA & ₹11,50,000 in India",
    "Multi-purpose language used by popular companies like Cisco, IBM, Mozilla, Google, Quora, HP, Dropbox, Qualcomm, etc"
  ];
  const pyDemand = document.getElementById("pyRsnDmnd");
  listFunction(pythonDemand, pyDemand);

  const javascriptDemand = [
    "In extension to absolute JavaScript, various popular libraries and frameworks make JavaScript development easier",
    "Most accessible supporting technologies related to JavaScript are JSON, jQuery, Angular, React (JS Library), etc",
    "Fundamentally a front-end language, it can also be practiced on the server-side throughout Node.js to create scalable network applications",
    "Majority of tech giants like Google, Facebook, SAP, Dell, Accenture, etc rely on Javascript to design interactive web pages and dynamically display content to users",
    "Recognized as most conventional programming languages the average JavaScript Developer Salary in the US as per Indeed is $117,000 in USA & ₹16,00,000 in India"
  ];
  const jsDemand = document.getElementById("jsRsnDmnd");
  listFunction(javascriptDemand, jsDemand);

  const csDemand = [
    "Rich set of libraries make compilation and execution with C# lightning fast",
    "It is used in backend operations of several popular websites like Bing, Dell, Visual Studio and Market Watch",
    "C# uses frameworks like Xamarin and .NET for building mobile applications and game development.",
    "C# is mostly used with Microsoft’s .NET framework to design web forms, windows applications, etc",
    "The language is best suited for the applications that are based on Windows, Android as well as iOS since it takes the aid of Microsoft Visual C++",
    "Highly recommended language for building 3D and 2D video games using the popular Unity game engine, which produces one-third of the top games on the market"
  ];
  const cSharpDemand = document.getElementById("csRsnDmnd");
  listFunction(csDemand, cSharpDemand);

  const phpDemand = [
    "PHP is used by 79.0% of all the websites whose server-side programming languages are known ",
    "PHP is simple, fast and platform-independent ",
    "It is 631k repositories on GitHub and has a community of 5.9M to back it up",
    "Companies that have publicly declared usage of PHP include Facebook, Yahoo, Wikipedia",
    "Average global salary for development on PHP is $102,000 in USA & ₹8,50,000 in India"
  ];
  const php_Demand = document.getElementById("phpRsnDmnd");
  listFunction(phpDemand, php_Demand);

  const sqlDemand = [
    "It works by analyzing and understanding databases consisting of fields of data within tables.",
    "Most fortune 500 companies have built their own high-performance database systems based off SQL",
    "With over 260K repositories on Github & huge community to back it up, it eclipses the popularity of a lot of the newer languages in the Data Analytics field",
    "Database developers coding in SQL take home an average annual pay of $97,000 in USA & ₹10,00,000 in India",
    "Companies such as Uber, Netflix, AirB&B, Google, Amazon use SQL as their foundational querying medium"
  ];
  const sql_Demand = document.getElementById("sqlRsnDmnd");
  listFunction(sqlDemand, sql_Demand);
}