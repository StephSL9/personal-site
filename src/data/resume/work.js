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
    name: 'Skeptical Investments',
    position: 'Co-founder',
    startDate: '2017-04-01',
    summary: `Skeptical Investments is a micro-vc fund focused on Angel, Seed, and Series-A
    YC companies.`,
    highlights: [
      'Created the InstaSafe. Fast, automated investment docs for YC companies.',
      'Advise several startups in the fund.',
    ],
  },
  {
    name: 'Arthena',
    position: 'Co-founder & C.T.O.',
    startDate: '2014-01-01',
    endDate: '2022-01-01',
    summary: `Arthena is a Series A Company funded by <a href="https://www.anthemis.com/">Athemis</a>,
    <a href="https://foundationcapital.com">Foundation Capital</a>, and <a href="https://ycombinator.com/">YC</a>.
    We develop quantitative strategies to predict the value of fine art and build investment products.
    I ran a 20-person product and engineering org for 8 years. We were acquired by
    <a href="https://www.masterworks.com/">Masterworks</a> in 2023.`,
    highlights: [
      'Built production, online, end-to-end optimized machine learning pipelines for time-series prediction.',
      'Designed micro-service architecture around: data collection, data integrity, feature engineering, research, strategy, backtesting, deployment, and reporting.',
      "Set and communicated team priorities that supported the broader organization's goals. Aligned strategy, processes, and decision-making across teams.",
      "Set clear expectations with individuals based on their level and role and aligned them to the broader organization's goals. Met regularly with individuals to discuss performance and development, and provided feedback and coaching.",
      'Developed the long-term technical vision and roadmap within, and often beyond, the scope of my teams. Evolved the roadmap to meet anticipated future requirements and infrastructure needs.',
    ],
  },
];

export default work;
