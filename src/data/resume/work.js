/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Npower Canada',
    position: 'Junior Data Analyst Program',
    startDate: '2023-01-09',
    endDate: '2023-04-15',
    highlights: [
      'Utilize Excel spreadsheets to perform data wrangling and data mining.',
      'Develop working knowledge of Python language for data analysis using Pandas and Numpy.',
      'Effectively complete a capstone project by collecting data from multiple sources, performing exploratory data analysis, data wrangling, statistical analysis and mining of the data using Python libraries.',
      'Work extensively on creating charts and plots to visualize data, and building an interactive dashboard using IBMs Cognos Analytics and various Excel charts/graphs.',
      'Visualize data using Python libraries including Matplotlib, Seaborn, Plotly and Dash.',
      'Compose queries to access data in cloud databases using SQL and Python from Jupyter notebooks.',
      'Explain cloud concepts, benefits of cloud computing and core Azure architecture components.',
      'Use core Azure services and choose the Azure AI services that best address a company’s challenges.',
      'Control Azure spending and managing bills by applying recommended practices to minimize cost.',
    ],
  },
  {
    name: 'Hai Kang Life Corporation Limited │ Hong Kong',
    position: 'R&D Associate',
    startDate: '2020-12-01',
    endDate: '2021-12-15',
    highlights: [
      'Implemented and adhered to established production protocols of diagnostic kits.',
      'Researched in optimizing PCR conditions by increasing the purity of the sample amplified from 45% to 90%.',
      'Enhanced the efficiency of nucleic acid extraction using magnetic beads by 35%.',
      'Analyzed and interpreted experiment results to identify trends and patterns using Excel.',
      'Composed detailed experiment reports and delivered informative presentations about experiment findings.',
    ],
  },
  {
    name: 'BGI Health (HK) Company Limited │ Hong Kong',
    position: 'Laboratory Technician',
    startDate: '2020-01-01',
    endDate: '2020-12-01',
    highlights: [
      'Delivered accurate and efficient laboratory operations under high pressure as a team.',
      'Performed RNA and DNA extraction and quality control of 100 to 200 RNA or DNA samples per day.',
      "Performed Plasma separation and aliquoting of an average of 100 blood samples per day.",
      "Utilized laboratory automation systems.",
      'Implemented the Laboratory Information Management System (LIMS).',
      'Monitored the laboratory environment and maintained the optimal condition of equipment.',
    ],
  },
];

export default work;
