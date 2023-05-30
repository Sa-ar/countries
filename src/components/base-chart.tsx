import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface BaseChartProps {
  label: string;
  labels: string[];
  dataset: {
    label: string;
    data: number[];
  };
}

const BaseChart: React.FC<BaseChartProps> = ({ label, labels, dataset }) => {
  const data = {
    labels,
    datasets: [
      {
        label: dataset.label,
        data: dataset.data,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.7)",
        hoverBorderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <div>
      <h2>{label}</h2>
      <Bar data={data} />
    </div>
  );
};

export default BaseChart;
