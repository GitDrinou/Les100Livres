import DonutChart from "react-donut-chart";

const ReadDonutChart = (props: {numberRead: number}) => {
  const percentRead = (props.numberRead / 100 ) * 100

  return (
    <>
      <DonutChart
        data={[
          {label: 'Lus', value:percentRead},
          {label: 'À lire', value:(100 - percentRead)},
        ]}
        height={180}
        width={270}
        colors={["#a2d9ce", "#16a085"]}
        strokeColor={"#FFFFFF"}
        outerRadius={"1.0"}
        innerRadius={"0.60"}
        interactive={false}
      />
    </>
  )
}

export default ReadDonutChart;