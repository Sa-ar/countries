import { Bar, Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export enum CHART_TYPES {
  "BAR",
  "PIE",
}

interface BaseChartProps {
  variant?: CHART_TYPES;
  label: string;
  labels: string[];
  dataset: {
    label: string;
    data: number[];
  };
}

const BaseChart: React.FC<BaseChartProps> = ({
  variant = CHART_TYPES.BAR,
  label,
  labels,
  dataset,
}) => {
  const barStyle = {
    backgroundColor: "rgba(175,43,122,0.4)",
    borderColor: "rgba(175,43,122,1)",
    borderWidth: 1,
    hoverBackgroundColor: "rgba(175,43,122,0.7)",
    hoverBorderColor: "rgba(175,43,122,1)",
  };
  const pieStyle = {
    backgroundColor: [
      "#FFC0CB",
      "#00FFFF",
      "#FFD700",
      "#800080",
      "#00FF00",
      "#FFA500",
      "#0000FF",
    ],
    hoverBackgroundColor: [
      "#FFAEB9",
      "#E0FFFF",
      "#FFDF00",
      "#8B008B",
      "#32CD32",
      "#FF8C00",
      "#0000CD",
    ],
  };
  const chartStyle = variant === CHART_TYPES.BAR ? barStyle : pieStyle;
  const data = {
    labels,
    datasets: [
      {
        label: dataset.label,
        data: dataset.data,
        ...chartStyle,
      },
    ],
  };

  return (
    <div>
      <h2 className="text-[rgba(175,43,122,0.7)]">{label}</h2>
      {variant === CHART_TYPES.BAR ? <Bar data={data} /> : <Pie data={data} />}
    </div>
  );
};

export default BaseChart;
