export const printTable = () => {
    const printWindow = window.open('', '', 'height=400,width=400') as Window;
    printWindow.document.write('<html><head><title>Table Contents</title>');
  
    //Print the Table CSS.
    const table_style = document.getElementById("table_style")?.innerHTML as string;
    printWindow.document.write('<style type = "text/css">');
    printWindow.document.write(table_style);
    printWindow.document.write('</style>');
    printWindow.document.write('</head>');
  
    //Print the DIV contents i.e. the HTML Table.
    printWindow.document.write('<body>');
    const divContents = document.getElementById("dvContents")?.innerHTML as string;
    printWindow.document.write(divContents);
    printWindow.document.write('</body>');
  
    printWindow.document.write('</html>');
    printWindow.document.close();
    printWindow.print();
  }