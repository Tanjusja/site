var http = require('http'); /*���������� ������, ������� ��������� ������*/
http.createServer(function(req,res){ /*������� ������ � ����-��� ��������; ��� ��� �� ����� �� �������� ��� res: 2 ����:res-����� ���������� � ����� html*/
	res.writeHead(200, {'Content-type':'text/plain'}); /*���� ���� ������� ���������*/
	res.write('Hello world'); /*����� html*/
	
	res.end('\<br>\Hi'); /*�� ����������!*/
	/**/
	
	}).listen(8128); /*���� �������*/
	console.log('Server running 8128'); /*���������*/