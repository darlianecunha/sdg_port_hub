// SDG Attributes Model — Complete indicator data
// Based on: Cunha et al. (2025), Marine Policy 181, 106841

export interface ScoreCriteria {
  score: 0 | 1 | 2 | 3;
  label: string;
}

export interface Indicator {
  id: string;
  code: string;
  name: string;
  criteria: ScoreCriteria[];
}

export interface ThematicArea {
  id: string;
  name: string;
  indicators: Indicator[];
}

export interface SDG {
  id: string;
  number: number;
  name: string;
  shortName: string;
  color: string;
  bgColor: string;
  textColor: string;
  icon: string;
  areas: ThematicArea[];
}

export const SDG_DATA: SDG[] = [
  {
    id: "sdg7",
    number: 7,
    name: "Affordable and Clean Energy",
    shortName: "Clean Energy",
    color: "#FCC30B",
    bgColor: "#FEF9E7",
    textColor: "#7D6008",
    icon: "⚡",
    areas: [
      {
        id: "sdg7-area1",
        name: "Energy Efficiency",
        indicators: [
          {
            id: "7.1",
            code: "7.1",
            name: "Number of awareness programmes on rational use of energy",
            criteria: [
              { score: 0, label: "No programme in operation." },
              { score: 1, label: "Up to 2 programmes implemented." },
              { score: 2, label: "3–5 programmes implemented." },
              { score: 3, label: "More than 5 programmes implemented." },
            ],
          },
          {
            id: "7.2",
            code: "7.2",
            name: "Number of energy efficiency management programmes",
            criteria: [
              { score: 0, label: "No programme in operation." },
              { score: 1, label: "Up to 2 programmes implemented." },
              { score: 2, label: "3–5 programmes implemented." },
              { score: 3, label: "More than 5 programmes implemented." },
            ],
          },
          {
            id: "7.3",
            code: "7.3",
            name: "Number of technological innovation initiatives in energy efficiency",
            criteria: [
              { score: 0, label: "No initiative." },
              { score: 1, label: "Up to 2 technological initiatives implemented." },
              { score: 2, label: "3–5 technological initiatives implemented." },
              { score: 3, label: "More than 5 initiatives implemented." },
            ],
          },
        ],
      },
      {
        id: "sdg7-area2",
        name: "Renewable Energy in Port Facilities",
        indicators: [
          {
            id: "7.4",
            code: "7.4",
            name: "Percentage of renewable energy contracted and produced in port facilities",
            criteria: [
              { score: 0, label: "No use of renewable energy." },
              { score: 1, label: "Up to 10% of the energy used is renewable." },
              { score: 2, label: "More than 10% up to 50% of the energy used is renewable." },
              { score: 3, label: "More than 50% of the energy used is renewable." },
            ],
          },
          {
            id: "7.5",
            code: "7.5",
            name: "Percentage of biofuels in electrical and mechanical loads",
            criteria: [
              { score: 0, label: "No use of biofuels." },
              { score: 1, label: "Less than 5% of the loads are operated with biofuels." },
              { score: 2, label: "5–20% of the loads are operated with biofuels." },
              { score: 3, label: "More than 20% of the loads are operated with biofuels." },
            ],
          },
          {
            id: "7.6",
            code: "7.6",
            name: "Number of technological innovation initiatives in renewable energy",
            criteria: [
              { score: 0, label: "No initiative." },
              { score: 1, label: "Up to 2 initiatives in the planning or pilot phase." },
              { score: 2, label: "3–5 initiatives in the implementation phase with preliminary results." },
              { score: 3, label: "More than 5 initiatives in full operation with proven results." },
            ],
          },
          {
            id: "7.7",
            code: "7.7",
            name: "Diversity of renewable energy sources in port facilities",
            criteria: [
              { score: 0, label: "No use of renewable sources." },
              { score: 1, label: "Use of 1 different type of renewable energy." },
              { score: 2, label: "Use of 2 different types of renewable energy." },
              { score: 3, label: "Use of 3 or more different types of renewable energy." },
            ],
          },
          {
            id: "7.8",
            code: "7.8",
            name: "Number of partnerships for the promotion of clean energy",
            criteria: [
              { score: 0, label: "No partnership established." },
              { score: 1, label: "Up to 2 partnerships established with a focus on clean energy." },
              { score: 2, label: "3–5 partnerships established with a focus on clean energy." },
              { score: 3, label: "More than 5 partnerships established with a focus on clean energy." },
            ],
          },
          {
            id: "7.9",
            code: "7.9",
            name: "Number of charging stations for electric vehicles",
            criteria: [
              { score: 0, label: "No charging station available." },
              { score: 1, label: "Up to 5 charging stations available." },
              { score: 2, label: "6–15 charging stations available." },
              { score: 3, label: "More than 15 charging stations available." },
            ],
          },
        ],
      },
      {
        id: "sdg7-area3",
        name: "Renewable Energy on Ships",
        indicators: [
          {
            id: "7.10",
            code: "7.10",
            name: "Percentage of renewable energy supply to ships",
            criteria: [
              { score: 0, label: "No supply of renewable energy to ships." },
              { score: 1, label: "Less than 10% of the energy supply to ships comes from renewable sources." },
              { score: 2, label: "Between 10% and 30% of the energy supply to ships comes from renewable sources." },
              { score: 3, label: "More than 30% of the energy supply to ships comes from renewable sources." },
            ],
          },
          {
            id: "7.11",
            code: "7.11",
            name: "Percentage of LNG fuelling",
            criteria: [
              { score: 0, label: "No LNG fuelling." },
              { score: 1, label: "Less than 5% of the total fuel supply is with LNG." },
              { score: 2, label: "Between 5% and 20% of the total fuel supply is with LNG." },
              { score: 3, label: "More than 20% of the total fuel supply is with LNG." },
            ],
          },
          {
            id: "7.12",
            code: "7.12",
            name: "Number of technological innovation initiatives in electrical and energy services for ships",
            criteria: [
              { score: 0, label: "No initiative." },
              { score: 1, label: "Up to 2 technological innovation initiatives in planning or pilot phase." },
              { score: 2, label: "3–5 initiatives in the implementation or efficacy evaluation phase." },
              { score: 3, label: "More than 5 initiatives in full operation, with proven efficacy results." },
            ],
          },
          {
            id: "7.13",
            code: "7.13",
            name: "Number of ships using renewable energy in the port",
            criteria: [
              { score: 0, label: "No ships use renewable energy." },
              { score: 1, label: "Up to 5% of the ships in the port use renewable energy." },
              { score: 2, label: "5–15% of the ships in the port use renewable energy." },
              { score: 3, label: "More than 15% of the ships in the port use renewable energy." },
            ],
          },
          {
            id: "7.14",
            code: "7.14",
            name: "Differentiated tariffs for ships performing above environmental standards",
            criteria: [
              { score: 0, label: "No application of differentiated tariffs." },
              { score: 1, label: "Up to 5% discount on port tariffs." },
              { score: 2, label: "5–15% discount on port tariffs." },
              { score: 3, label: "More than 15% discount on port tariffs." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "sdg8",
    number: 8,
    name: "Decent Work and Economic Growth",
    shortName: "Decent Work",
    color: "#A21942",
    bgColor: "#FDEEF3",
    textColor: "#7B1234",
    icon: "💼",
    areas: [
      {
        id: "sdg8-area1",
        name: "Decent Work",
        indicators: [
          {
            id: "8.1",
            code: "8.1",
            name: "Absences due to health-related absenteeism",
            criteria: [
              { score: 0, label: "Absences greater than 5% of total worked hours." },
              { score: 1, label: "Absences between 3% and 5%." },
              { score: 2, label: "Absences between 1% and 3%." },
              { score: 3, label: "Absences less than 1%." },
            ],
          },
          {
            id: "8.2",
            code: "8.2",
            name: "Leave due to occupational diseases",
            criteria: [
              { score: 0, label: "Leave greater than 10 cases per 100 employees." },
              { score: 1, label: "Leave between 6 and 10 cases." },
              { score: 2, label: "Leave between 2 and 5 cases." },
              { score: 3, label: "Leave less than 2 cases." },
            ],
          },
          {
            id: "8.3",
            code: "8.3",
            name: "Leave due to accidents",
            criteria: [
              { score: 0, label: "Leave greater than 10 cases per 100 employees." },
              { score: 1, label: "Leave between 6 and 10 cases." },
              { score: 2, label: "Leave between 2 and 5 cases." },
              { score: 3, label: "Leave less than 2 cases." },
            ],
          },
          {
            id: "8.4",
            code: "8.4",
            name: "Number of accidents",
            criteria: [
              { score: 0, label: "Accidents greater than 15 per 100 employees." },
              { score: 1, label: "Accidents between 10 and 15." },
              { score: 2, label: "Accidents between 5 and 10." },
              { score: 3, label: "Accidents less than 5." },
            ],
          },
          {
            id: "8.5",
            code: "8.5",
            name: "Fatal accidents",
            criteria: [
              { score: 0, label: "Any fatal accident." },
              { score: 1, label: "No fatal accidents, but high rate of serious accidents (>5 per 100 employees)." },
              { score: 2, label: "Low rate of serious accidents (1–5 per 100 employees)." },
              { score: 3, label: "No serious accidents." },
            ],
          },
          {
            id: "8.6",
            code: "8.6",
            name: "Percentage of local workers in management positions",
            criteria: [
              { score: 0, label: "Less than 20%." },
              { score: 1, label: "Between 20% and 30%." },
              { score: 2, label: "Between 30.1% and 40%." },
              { score: 3, label: "More than 50%." },
            ],
          },
          {
            id: "8.7",
            code: "8.7",
            name: "Percentage of female employees",
            criteria: [
              { score: 0, label: "Less than 20%." },
              { score: 1, label: "Greater than or equal to 20% and less than 30%." },
              { score: 2, label: "Greater than or equal to 30% and less than 50%." },
              { score: 3, label: "Greater than or equal to 50%." },
            ],
          },
          {
            id: "8.8",
            code: "8.8",
            name: "Percentage of young employees (14–24 years old)",
            criteria: [
              { score: 0, label: "Less than 5%." },
              { score: 1, label: "Greater than or equal to 5% and less than 10%." },
              { score: 2, label: "Greater than or equal to 10% and less than 15%." },
              { score: 3, label: "Greater than or equal to 15%." },
            ],
          },
          {
            id: "8.9",
            code: "8.9",
            name: "Percentage of employees with disabilities",
            criteria: [
              { score: 0, label: "Less than 2%." },
              { score: 1, label: "Greater than or equal to 2% and less than 4%." },
              { score: 2, label: "Greater than or equal to 4% and less than 6%." },
              { score: 3, label: "Greater than or equal to 6%." },
            ],
          },
        ],
      },
      {
        id: "sdg8-area2",
        name: "Economic Growth",
        indicators: [
          {
            id: "8.10",
            code: "8.10",
            name: "Annual Revenue Growth Rate Adjusted for Inflation",
            criteria: [
              { score: 0, label: "Real growth ≤1% or negative." },
              { score: 1, label: "Real growth between 1% and 4%." },
              { score: 2, label: "Real growth between 5% and 8%." },
              { score: 3, label: "Real growth >8%." },
            ],
          },
          {
            id: "8.11",
            code: "8.11",
            name: "Port Revenue Target",
            criteria: [
              { score: 0, label: "No port revenue target set." },
              { score: 1, label: "More than 2% below the target." },
              { score: 2, label: "Between 2% below and 2% above the target." },
              { score: 3, label: "More than 2% above the target." },
            ],
          },
          {
            id: "8.12",
            code: "8.12",
            name: "EBITDA Margin Value",
            criteria: [
              { score: 0, label: "No EBITDA target set." },
              { score: 1, label: "More than 2% below the target." },
              { score: 2, label: "Between 2% below and 2% above the target." },
              { score: 3, label: "More than 2% above the target." },
            ],
          },
          {
            id: "8.13",
            code: "8.13",
            name: "Quantity of Tons Handled",
            criteria: [
              { score: 0, label: "No target stipulated." },
              { score: 1, label: "More than 2% below the target." },
              { score: 2, label: "Between 2% below and 2% above the target." },
              { score: 3, label: "More than 2% above the target." },
            ],
          },
          {
            id: "8.14",
            code: "8.14",
            name: "Revenue per Employee",
            criteria: [
              { score: 0, label: "No target stipulated." },
              { score: 1, label: "More than 2% below the target." },
              { score: 2, label: "Between 2% below and 2% above the target." },
              { score: 3, label: "More than 2% above the target." },
            ],
          },
          {
            id: "8.15",
            code: "8.15",
            name: "Position in the ANTAQ Cargo Movement Ranking",
            criteria: [
              { score: 0, label: "No target stipulated." },
              { score: 1, label: "More than 2% below the target." },
              { score: 2, label: "Between 2% below and 2% above the target." },
              { score: 3, label: "More than 2% above the target." },
            ],
          },
          {
            id: "8.16",
            code: "8.16",
            name: "Diversity of Types of Cargo Handled",
            criteria: [
              { score: 0, label: "No monitoring of cargo types." },
              { score: 1, label: "Between 1 and 3 types." },
              { score: 2, label: "Between 4 and 6 types." },
              { score: 3, label: "More than 6 types." },
            ],
          },
          {
            id: "8.17",
            code: "8.17",
            name: "Number of Inclusive and Social Policies Implemented",
            criteria: [
              { score: 0, label: "No policies in place." },
              { score: 1, label: "Between 1 and 5 policies." },
              { score: 2, label: "Between 6 and 10 policies." },
              { score: 3, label: "More than 10 policies." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "sdg9",
    number: 9,
    name: "Industry, Innovation and Infrastructure",
    shortName: "Innovation",
    color: "#FD6925",
    bgColor: "#FEF0E8",
    textColor: "#7D3410",
    icon: "🏗️",
    areas: [
      {
        id: "sdg9-area1",
        name: "Research and Development",
        indicators: [
          {
            id: "9.1",
            code: "9.1",
            name: "Number of patents filed and assigned at the INPI",
            criteria: [
              { score: 0, label: "No patents filed in the year." },
              { score: 1, label: "Up to 2 patents filed in the year, with patents assigned." },
              { score: 2, label: "3–5 patents filed in the year, with patents assigned." },
              { score: 3, label: "More than 5 patents filed in the year, with patents assigned." },
            ],
          },
          {
            id: "9.2",
            code: "9.2",
            name: "Number of publications in high-impact journals funded by the port",
            criteria: [
              { score: 0, label: "No initiatives or significant results." },
              { score: 1, label: "Up to 2 publications in high-impact journals." },
              { score: 2, label: "3–5 publications in high-impact journals." },
              { score: 3, label: "More than 5 publications in high-impact journals." },
            ],
          },
          {
            id: "9.3",
            code: "9.3",
            name: "Number of awards and quality seals related to Innovation",
            criteria: [
              { score: 0, label: "No initiatives or significant results." },
              { score: 1, label: "Receipt of up to 2 awards or quality seals in innovation." },
              { score: 2, label: "Receipt of 3–5 awards or quality seals in innovation." },
              { score: 3, label: "Receipt of more than 5 awards or quality seals in innovation." },
            ],
          },
        ],
      },
      {
        id: "sdg9-area2",
        name: "Innovation and Technology",
        indicators: [
          {
            id: "9.4",
            code: "9.4",
            name: "Position in the port sector innovation ranking",
            criteria: [
              { score: 0, label: "Position in the fourth quartile in the innovation ranking." },
              { score: 1, label: "Position in the third quartile in the innovation ranking." },
              { score: 2, label: "Position in the second quartile in the innovation ranking." },
              { score: 3, label: "Position in the first quartile in the innovation ranking." },
            ],
          },
          {
            id: "9.5",
            code: "9.5",
            name: "Average level of innovation maturation per project",
            criteria: [
              { score: 0, label: "No project." },
              { score: 1, label: "Projects in the initial concept or development phase with low level of maturation." },
              { score: 2, label: "Projects in the prototyping or pilot stage with medium level of maturation." },
              { score: 3, label: "Projects with final products or implemented solutions with a high level of technological maturity (TRL)." },
            ],
          },
          {
            id: "9.6",
            code: "9.6",
            name: "Diversity of knowledge areas in applied research projects",
            criteria: [
              { score: 0, label: "No knowledge areas involved in the projects." },
              { score: 1, label: "Up to 2 knowledge areas involved in the projects." },
              { score: 2, label: "3–5 different knowledge areas involved in the projects." },
              { score: 3, label: "More than 5 different knowledge areas involved in the projects." },
            ],
          },
          {
            id: "9.7",
            code: "9.7",
            name: "Percentage of automated operations in the port",
            criteria: [
              { score: 0, label: "No automated operations." },
              { score: 1, label: "Up to 25% of operations automated." },
              { score: 2, label: "25–50% of operations automated." },
              { score: 3, label: "More than 50% of operations automated." },
            ],
          },
          {
            id: "9.8",
            code: "9.8",
            name: "Number of agreements with universities and research centres or funded projects",
            criteria: [
              { score: 0, label: "No agreement or project." },
              { score: 1, label: "Up to 2 agreements or projects." },
              { score: 2, label: "3–5 agreements or established projects." },
              { score: 3, label: "More than 5 agreements or projects." },
            ],
          },
          {
            id: "9.9",
            code: "9.9",
            name: "Number of external researchers from the port institution or university linked to innovation projects",
            criteria: [
              { score: 0, label: "No external researcher linked." },
              { score: 1, label: "Up to 3 external researchers linked." },
              { score: 2, label: "4–6 external researchers linked." },
              { score: 3, label: "More than 6 external researchers linked." },
            ],
          },
          {
            id: "9.10",
            code: "9.10",
            name: "Number of partner companies in innovation projects",
            criteria: [
              { score: 0, label: "No partner companies." },
              { score: 1, label: "Up to 2 partner companies involved." },
              { score: 2, label: "3–5 partner companies involved." },
              { score: 3, label: "More than 5 partner companies with effective collaboration and significant contributions." },
            ],
          },
          {
            id: "9.11",
            code: "9.11",
            name: "Number of supported startups focused on innovative solutions",
            criteria: [
              { score: 0, label: "No startup." },
              { score: 1, label: "Support to up to 2 startups." },
              { score: 2, label: "Support to 3–5 startups." },
              { score: 3, label: "Support to more than 5 startups." },
            ],
          },
          {
            id: "9.12",
            code: "9.12",
            name: "Number of agreements with other ports or terminals for the promotion of innovation",
            criteria: [
              { score: 0, label: "No agreement." },
              { score: 1, label: "Up to 2 agreements." },
              { score: 2, label: "3–5 agreements." },
              { score: 3, label: "More than 5 agreements." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "sdg11",
    number: 11,
    name: "Sustainable Cities and Communities",
    shortName: "Sustainable Cities",
    color: "#FD9D24",
    bgColor: "#FEF5E7",
    textColor: "#7D4E10",
    icon: "🏙️",
    areas: [
      {
        id: "sdg11-area1",
        name: "Environmental and Social Impact",
        indicators: [
          {
            id: "11.1",
            code: "11.1",
            name: "Number of Complaints Related to the Environmental and Social Impact of the Port",
            criteria: [
              { score: 0, label: "More than 10 annual complaints." },
              { score: 1, label: "5–10 annual complaints, with mitigation actions." },
              { score: 2, label: "2–4 annual complaints, with mitigation actions." },
              { score: 3, label: "Up to 1 annual complaint, with mitigation actions." },
            ],
          },
          {
            id: "11.2",
            code: "11.2",
            name: "Value of the Port Noise Control Index",
            criteria: [
              { score: 0, label: "No measurement of the index." },
              { score: 1, label: "Index above the legally permitted limit." },
              { score: 2, label: "Index within the legally permitted limits." },
              { score: 3, label: "Index 10% below the legally permitted limit." },
            ],
          },
        ],
      },
      {
        id: "sdg11-area2",
        name: "Sustainability and Community",
        indicators: [
          {
            id: "11.3",
            code: "11.3",
            name: "Number of sustainability projects targeted at the Community",
            criteria: [
              { score: 0, label: "No project." },
              { score: 1, label: "Up to 2 ongoing projects." },
              { score: 2, label: "3–5 ongoing projects, with initial proven impact." },
              { score: 3, label: "More than 5 ongoing projects, with significant and sustainable proven impact." },
            ],
          },
          {
            id: "11.4",
            code: "11.4",
            name: "Quantity of green areas or public spaces developed or maintained by the Port",
            criteria: [
              { score: 0, label: "No green area." },
              { score: 1, label: "Less than 10% of the total space." },
              { score: 2, label: "10–30% of the total space." },
              { score: 3, label: "More than 30% of the total space." },
            ],
          },
          {
            id: "11.5",
            code: "11.5",
            name: "Total value of investments in local community infrastructure (roads, lighting, sanitation, others)",
            criteria: [
              { score: 0, label: "No investments." },
              { score: 1, label: "Total investment represents less than 5% of the Port's budget." },
              { score: 2, label: "Total investment represents 5–10% of the Port's budget." },
              { score: 3, label: "Total investment represents more than 10% of the Port's budget." },
            ],
          },
          {
            id: "11.6",
            code: "11.6",
            name: "Number of programmes or partnerships for sustainable mobility",
            criteria: [
              { score: 0, label: "No programme." },
              { score: 1, label: "Up to 2 programmes or established partnerships." },
              { score: 2, label: "3–5 programmes or established partnerships." },
              { score: 3, label: "More than 5 programmes or established partnerships." },
            ],
          },
          {
            id: "11.7",
            code: "11.7",
            name: "Number of community engagement initiatives by the Port",
            criteria: [
              { score: 0, label: "No initiative." },
              { score: 1, label: "Up to 3 engagement initiatives." },
              { score: 2, label: "4–6 engagement initiatives." },
              { score: 3, label: "More than 6 engagement initiatives with broad coverage, high community participation." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "sdg12",
    number: 12,
    name: "Responsible Consumption and Production",
    shortName: "Responsible Consumption",
    color: "#BF8B2E",
    bgColor: "#FBF5E6",
    textColor: "#7D5B1E",
    icon: "♻️",
    areas: [
      {
        id: "sdg12-area1",
        name: "Environmental Management",
        indicators: [
          {
            id: "12.1",
            code: "12.1",
            name: "Air Pollutant Concentration Value",
            criteria: [
              { score: 0, label: "No pollutant measurement." },
              { score: 1, label: "Pollutant concentrations up to 10% above established standards." },
              { score: 2, label: "Pollutant concentrations within established standards." },
              { score: 3, label: "Pollutant concentrations 10% below established standards." },
            ],
          },
          {
            id: "12.2",
            code: "12.2",
            name: "Total Volume of Water Used",
            criteria: [
              { score: 0, label: "No control over water use." },
              { score: 1, label: "Water use above the granted limit." },
              { score: 2, label: "Water use equal to the granted limit." },
              { score: 3, label: "Water use 10% below the granted limit." },
            ],
          },
          {
            id: "12.3",
            code: "12.3",
            name: "Total Volume of Water Reused",
            criteria: [
              { score: 0, label: "No water reuse." },
              { score: 1, label: "Less than 10% of the total water used is reused." },
              { score: 2, label: "Between 10% and 25% of the total water used is reused." },
              { score: 3, label: "More than 25% of the total water used is reused." },
            ],
          },
          {
            id: "12.4",
            code: "12.4",
            name: "Number of Internally Recorded Environmental Accidents",
            criteria: [
              { score: 0, label: "No measurements for recording environmental accidents." },
              { score: 1, label: "Two or more accidents recorded in the year." },
              { score: 2, label: "One accident recorded in the year." },
              { score: 3, label: "No environmental accident recorded in the year." },
            ],
          },
        ],
      },
      {
        id: "sdg12-area2",
        name: "Waste Management",
        indicators: [
          {
            id: "12.5",
            code: "12.5",
            name: "Amount of Waste Generated",
            criteria: [
              { score: 0, label: "No waste management system." },
              { score: 1, label: "Reduction of up to 5% in waste generation compared to the previous year." },
              { score: 2, label: "Reduction of 5–10% in waste generation compared to the previous year." },
              { score: 3, label: "Reduction of more than 10% in waste generation compared to the previous year." },
            ],
          },
          {
            id: "12.6",
            code: "12.6",
            name: "Percentage of Waste Recycled and/or Reused",
            criteria: [
              { score: 0, label: "No recycling and/or reuse of waste." },
              { score: 1, label: "Less than 30% of the generated waste is recycled and/or reused." },
              { score: 2, label: "30–60% of the generated waste is recycled and/or reused." },
              { score: 3, label: "More than 60% of the generated waste is recycled and/or reused." },
            ],
          },
        ],
      },
      {
        id: "sdg12-area3",
        name: "Certifications and Management Systems",
        indicators: [
          {
            id: "12.7",
            code: "12.7",
            name: "Use of Environmental Management System",
            criteria: [
              { score: 0, label: "No system implemented." },
              { score: 1, label: "System implemented but not fully integrated into daily operations." },
              { score: 2, label: "System implemented and partially integrated into daily operations." },
              { score: 3, label: "System fully implemented and integrated into daily operations." },
            ],
          },
          {
            id: "12.8",
            code: "12.8",
            name: "ISO 14000 Certification Status",
            criteria: [
              { score: 0, label: "No certification initiative." },
              { score: 1, label: "Not certified or in the process of obtaining certification." },
              { score: 2, label: "Certified, but without annual reviews or continuous improvements." },
              { score: 3, label: "Certified with annual reviews and continuous improvements implemented." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "sdg13",
    number: 13,
    name: "Climate Action",
    shortName: "Climate Action",
    color: "#3F7E44",
    bgColor: "#EAF4EB",
    textColor: "#2A5430",
    icon: "🌍",
    areas: [
      {
        id: "sdg13-area1",
        name: "Climate Strategies and Planning",
        indicators: [
          {
            id: "13.1",
            code: "13.1",
            name: "Status of Climate Change Strategy Plan",
            criteria: [
              { score: 0, label: "No strategies." },
              { score: 1, label: "Strategy plan under development, no actions implemented." },
              { score: 2, label: "Strategy plan implemented, with some actions in practice." },
              { score: 3, label: "Fully operational strategy plan, with regular review and updates." },
            ],
          },
          {
            id: "13.2",
            code: "13.2",
            name: "Emissions Inventory",
            criteria: [
              { score: 0, label: "Emissions inventory not carried out." },
              { score: 1, label: "Emissions inventory conducted, but outdated." },
              { score: 2, label: "Emissions inventory conducted, updated more than a year ago." },
              { score: 3, label: "Emissions inventory updated annually and actively used for emissions management." },
            ],
          },
          {
            id: "13.3",
            code: "13.3",
            name: "Carbon Credit Management Programme",
            criteria: [
              { score: 0, label: "No Carbon Credit Programme." },
              { score: 1, label: "Programme in initial phase, without credits generated or purchased." },
              { score: 2, label: "Active programme, with carbon credits being generated or purchased." },
              { score: 3, label: "Well-established programme, with carbon credits being actively managed." },
            ],
          },
          {
            id: "13.4",
            code: "13.4",
            name: "Climate Monitoring Programme",
            criteria: [
              { score: 0, label: "Non-existent programme." },
              { score: 1, label: "Programme in implementation phase." },
              { score: 2, label: "Programme implemented, but data used in a limited way." },
              { score: 3, label: "Programme implemented and integrated into a climate response and planning system." },
            ],
          },
          {
            id: "13.5",
            code: "13.5",
            name: "Number of Collaborations and Partnerships for Climate Action",
            criteria: [
              { score: 0, label: "No collaboration or partnership established." },
              { score: 1, label: "Up to 2 collaborations or partnerships established." },
              { score: 2, label: "3–5 collaborations or partnerships with initial results." },
              { score: 3, label: "More than 5 collaborations or partnerships with significant and measurable impact on climate action." },
            ],
          },
        ],
      },
      {
        id: "sdg13-area2",
        name: "Infrastructure and Operations",
        indicators: [
          {
            id: "13.6",
            code: "13.6",
            name: "Climate-Resilient Infrastructure",
            criteria: [
              { score: 0, label: "No infrastructure assessed as climate resilient." },
              { score: 1, label: "Less than 25% of infrastructure assessed as climate resilient." },
              { score: 2, label: "25–50% of infrastructure assessed as climate resilient." },
              { score: 3, label: "More than 50% of infrastructure assessed as climate-resilient and adapted." },
            ],
          },
          {
            id: "13.7",
            code: "13.7",
            name: "Cargo Traffic Efficiency Index",
            criteria: [
              { score: 0, label: "Index not calculated." },
              { score: 1, label: "Efficiency index below the industry average." },
              { score: 2, label: "Efficiency index at the industry average." },
              { score: 3, label: "Efficiency index above the industry average, with continuous improvements." },
            ],
          },
          {
            id: "13.8",
            code: "13.8",
            name: "Percentage Reduction of Emissions Through New Technology Implementation",
            criteria: [
              { score: 0, label: "No emission reduction programmes." },
              { score: 1, label: "Less than 5% reduction in emissions through new technologies." },
              { score: 2, label: "5–10% reduction in emissions through new technologies." },
              { score: 3, label: "More than 10% reduction in emissions through new technologies." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "sdg14",
    number: 14,
    name: "Life Below Water",
    shortName: "Life Below Water",
    color: "#0A97D9",
    bgColor: "#E6F5FC",
    textColor: "#0A5E87",
    icon: "🌊",
    areas: [
      {
        id: "sdg14-area1",
        name: "Coastal Monitoring",
        indicators: [
          {
            id: "14.1",
            code: "14.1",
            name: "Number of invasive exotic species registered",
            criteria: [
              { score: 0, label: "No programme for identifying species." },
              { score: 1, label: "Identification of a number of invasive species in the region greater than in the previous period." },
              { score: 2, label: "Identification of a number of invasive species in the region equal to the previous period." },
              { score: 3, label: "Identification of a number of invasive species in the region fewer than in the previous period." },
            ],
          },
          {
            id: "14.2",
            code: "14.2",
            name: "Average concentration of pollutants in coastal water, in accordance with regional legislation",
            criteria: [
              { score: 0, label: "No measurements of pollutants in the water." },
              { score: 1, label: "Pollutant concentrations more than 10% above the established standards." },
              { score: 2, label: "Pollutant concentrations within the established standards." },
              { score: 3, label: "Pollutant concentrations 10% below the established standards." },
            ],
          },
          {
            id: "14.3",
            code: "14.3",
            name: "Quality of marine sediment, in accordance with regional legislation",
            criteria: [
              { score: 0, label: "No assessments of sediment quality." },
              { score: 1, label: "Sediment quality below acceptable standards, with the presence of contaminants." },
              { score: 2, label: "Sediment quality within acceptable standards." },
              { score: 3, label: "Sediment quality above standards, with low levels of contaminants." },
            ],
          },
          {
            id: "14.4",
            code: "14.4",
            name: "Number of environmental events recorded on the coast of the region",
            criteria: [
              { score: 0, label: "No monitoring of events." },
              { score: 1, label: "More than 5 environmental events recorded in the year." },
              { score: 2, label: "2–5 environmental events recorded in the year." },
              { score: 3, label: "0–1 environmental event recorded in the year, with rapid and effective responses." },
            ],
          },
        ],
      },
      {
        id: "sdg14-area2",
        name: "Management of Resources and Protected Areas",
        indicators: [
          {
            id: "14.5",
            code: "14.5",
            name: "Monitoring of ballast water",
            criteria: [
              { score: 0, label: "No monitoring in place." },
              { score: 1, label: "Inconsistent monitoring." },
              { score: 2, label: "Regular monitoring." },
              { score: 3, label: "Systematic monitoring." },
            ],
          },
          {
            id: "14.6",
            code: "14.6",
            name: "Total area of marine habitats protected in the port's area of operation",
            criteria: [
              { score: 0, label: "No protection programmes in place." },
              { score: 1, label: "Less than 10% of marine habitats are under protection." },
              { score: 2, label: "10–25% of marine habitats are under protection." },
              { score: 3, label: "More than 25% of marine habitats are under protection, with active conservation programmes." },
            ],
          },
        ],
      },
      {
        id: "sdg14-area3",
        name: "Investment and Research in Marine Science",
        indicators: [
          {
            id: "14.7",
            code: "14.7",
            name: "Total value invested in sustainable marine resource research",
            criteria: [
              { score: 0, label: "No investments." },
              { score: 1, label: "Investment less than 5% of the total research budget." },
              { score: 2, label: "Investment of 5–10% of the total research budget." },
              { score: 3, label: "Investment greater than 10% of the total research budget." },
            ],
          },
          {
            id: "14.8",
            code: "14.8",
            name: "Number of marine research projects funded by the port",
            criteria: [
              { score: 0, label: "No projects." },
              { score: 1, label: "Up to 2 projects funded in the year." },
              { score: 2, label: "3–5 projects funded in the year." },
              { score: 3, label: "More than 5 projects funded in the year, with collaborations from HEIs or research centres." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "sdg17",
    number: 17,
    name: "Partnerships for the Goals",
    shortName: "Partnerships",
    color: "#19486A",
    bgColor: "#E8EEF3",
    textColor: "#19486A",
    icon: "🤝",
    areas: [
      {
        id: "sdg17-area1",
        name: "Commitments and Certifications",
        indicators: [
          {
            id: "17.1",
            code: "17.1",
            name: "Status as a signatory of the UN Global Compact",
            criteria: [
              { score: 0, label: "Not a signatory." },
              { score: 1, label: "Signatory, without progress report." },
              { score: 2, label: "Active signatory." },
              { score: 3, label: "Active signatory, with annual progress report and targets for continuous improvement." },
            ],
          },
          {
            id: "17.2",
            code: "17.2",
            name: "Alignment of the SDGs with IDA and GRI indicators",
            criteria: [
              { score: 0, label: "No documented alignment." },
              { score: 1, label: "Partial alignment with the SDGs." },
              { score: 2, label: "Partial alignment and regular reports on SDG progress." },
              { score: 3, label: "Full alignment and regular reports on SDG progress." },
            ],
          },
          {
            id: "17.3",
            code: "17.3",
            name: "Existence of ECOPORTS certification",
            criteria: [
              { score: 0, label: "Not certified." },
              { score: 1, label: "In the process of certification." },
              { score: 2, label: "Certified, without regular renewal." },
              { score: 3, label: "Certified, with regular renewal and compliance with all criteria." },
            ],
          },
        ],
      },
      {
        id: "sdg17-area2",
        name: "Reports and Communications",
        indicators: [
          {
            id: "17.4",
            code: "17.4",
            name: "Publication of the sustainability report",
            criteria: [
              { score: 0, label: "Report not published." },
              { score: 1, label: "Report in implementation." },
              { score: 2, label: "Report published, but not in accordance with GRI standards or equivalent." },
              { score: 3, label: "Report published and in compliance with GRI standards or equivalent." },
            ],
          },
          {
            id: "17.5",
            code: "17.5",
            name: "Disclosure of the position in the IDA",
            criteria: [
              { score: 0, label: "Position in the IDA not disclosed." },
              { score: 1, label: "Position in the IDA publicly disclosed without action plans for improvement." },
              { score: 2, label: "Position in the IDA publicly disclosed." },
              { score: 3, label: "Position in the IDA publicly disclosed with action plans for improvement." },
            ],
          },
          {
            id: "17.6",
            code: "17.6",
            name: "Publication of sustainability indicators",
            criteria: [
              { score: 0, label: "Indicators not published." },
              { score: 1, label: "Indicators in the implementation phase." },
              { score: 2, label: "Indicators published, but without detail or context." },
              { score: 3, label: "Indicators published with detail, context, and performance comparisons." },
            ],
          },
          {
            id: "17.7",
            code: "17.7",
            name: "Recording and communication of environmental incidents",
            criteria: [
              { score: 0, label: "No follow-up for records." },
              { score: 1, label: "Non-systematic recording and communication." },
              { score: 2, label: "Systematic recording, internal communication." },
              { score: 3, label: "Systematic recording and communication, public and with response actions." },
            ],
          },
        ],
      },
      {
        id: "sdg17-area3",
        name: "Governance and Partnerships",
        indicators: [
          {
            id: "17.8",
            code: "17.8",
            name: "Number of independent members on the board of directors",
            criteria: [
              { score: 0, label: "No independent members." },
              { score: 1, label: "Less than 25% of members are independent." },
              { score: 2, label: "25–50% of members are independent." },
              { score: 3, label: "More than 50% of members are independent." },
            ],
          },
          {
            id: "17.9",
            code: "17.9",
            name: "Number of partnerships established with NGOs and other entities for sustainability initiatives",
            criteria: [
              { score: 0, label: "No partnership established." },
              { score: 1, label: "Up to 2 partnerships established." },
              { score: 2, label: "3–5 partnerships established." },
              { score: 3, label: "More than 5 partnerships established with ongoing projects." },
            ],
          },
          {
            id: "17.10",
            code: "17.10",
            name: "Listing of active communication channels with stakeholders",
            criteria: [
              { score: 0, label: "No communication channel." },
              { score: 1, label: "Limited or ineffective communication channels." },
              { score: 2, label: "Some communication channels established and active." },
              { score: 3, label: "Various communication channels established, active, and with regular feedback." },
            ],
          },
        ],
      },
    ],
  },
];

// Helper: get all indicators for a given SDG
export function getAllIndicators(sdg: SDG): Indicator[] {
  return sdg.areas.flatMap((area) => area.indicators);
}

// Helper: get max possible score for a given SDG
export function getMaxScore(sdg: SDG): number {
  return getAllIndicators(sdg).length * 3;
}

// Helper: get total max score across all SDGs
export const TOTAL_MAX_SCORE = SDG_DATA.reduce((sum, sdg) => sum + getMaxScore(sdg), 0);

// Helper: get performance label based on percentage
export function getPerformanceLabel(pct: number): { label: string; color: string } {
  if (pct >= 80) return { label: "Excellent", color: "#16a34a" };
  if (pct >= 60) return { label: "Good", color: "#2563eb" };
  if (pct >= 40) return { label: "Moderate", color: "#d97706" };
  if (pct >= 20) return { label: "Incipient", color: "#dc2626" };
  return { label: "Critical", color: "#7f1d1d" };
}
