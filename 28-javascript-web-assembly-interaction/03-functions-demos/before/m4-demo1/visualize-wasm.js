

const rowColors = ['#FF7B01','#02E088','#00A3FE' ];
let functionColorIndex = 1;
function colorForRow(index) {
    if (index < 2) {
        return rowColors[0];
    }
    const color = rowColors[functionColorIndex];
    if(index%2 !== 0) {
      functionColorIndex = functionColorIndex===1?2:1;
    } 
    return color;
}
function styleForRow(index) {
    const color = colorForRow(index);
    return `background:${color}; border: 0px; color: white; padding: 25px;font-weight: bolder;`;
}
function visualizeWASMInstance(fileName, instance, element) {
    google.charts.load('visualization', { packages: ["orgchart"], callback: () => {
        const rawData = []
        const root = `Instance of ${fileName}`
        rawData.push([root, '']);
        const exports = 'exports';
        rawData.push([exports, root])
        for (const wasmExport in instance.exports) {
            rawData.push([`${wasmExport}`, exports]);
            rawData.push([`${instance.exports[wasmExport]}`, `${wasmExport}`])
        }
        const data = new google.visualization.DataTable();
        
        data.addColumn('string', 'Name');
        data.addColumn('string', 'Parent');
        data.addRows(rawData);
        for(let i = 0;i < data.getNumberOfRows(); i++) {
            data.setRowProperty(i, 'style', styleForRow(i));
        }
        // Create the chart.
        var chart = new google.visualization.OrgChart(element);
        // Draw the chart, setting the allowHtml option to true for the tooltips.
        chart.draw(data, { 'allowHtml': true });
    } });

    

}

export default visualizeWASMInstance