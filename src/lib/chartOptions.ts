export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: true,
      text: "POST INTERACTIONS",
    },
  },
};

export function dataOptions(
  likes: number,
  comments: number,
  shares: number,
  saves: number,
  unlikes: number,
  reports: number
) {
  return {
    labels: ["Likes", "Comments", "Shares", "Saves", "Unlikes", "Reports"],
    datasets: [
      {
        label: "Number of interactions",
        data: [likes, comments, shares, saves, unlikes, reports],
        backgroundColor: [
          "rgba(25, 99, 132, 0.5)",
          "rgba(85, 152, 112, 0.5)",
          "rgba(154, 162, 235, 0.5)",
          "rgba(225, 119, 32, 0.5)",
          "rgba(225, 219, 82, 0.5)",
          "rgba(205, 129, 182, 0.5)",
        ],
      },
    ],
  };
}

export function dataOptionsRadar(
  likes: number,
  comments: number,
  shares: number,
  saves: number,
  unlikes: number,
  reports: number
) {
  return {
    labels: ["Likes", "Comments", "Shares", "Saves", "Unlikes", "Reports"],
    datasets: [
      {
        label: "Number of interactions",
        data: [likes, comments, shares, saves, unlikes, reports],
        fill: true,
        backgroundColor: "rgba(25, 99, 132, 0.3)",
        borderColor: "rgba(25, 99, 132, 1)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  };
}
