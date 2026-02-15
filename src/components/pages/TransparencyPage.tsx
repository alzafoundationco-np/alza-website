import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend, ComposedChart } from 'recharts';
import { FileText, Download, Award, DollarSign, ChevronRight,CircleSmall, Dot } from 'lucide-react';
import { Button } from '../ui/button';

interface TransparencyPageProps {
  onNavigate: (page: string) => void;
}

export function TransparencyPage({ onNavigate }: TransparencyPageProps) {
  const studentUniversitySupportData = [
    { year: '2023', students: 2, cost: 3342.08 },
    { year: '2024', students: 2, cost: 1751.39 },
    { year: '2025', students: 5, cost: 13050.13 },
    { year: '2026 Est.', students: 9, cost: 19631.12 },
  ];

  const studentLanguageSupportData = [
    { year: '2022', students: 5, cost: 1911 },
    { year: '2023', students: 5, cost: 2280 },
    { year: '2024', students: 6, cost: 2856 },
    { year: '2025', students: 2, cost: 1660 },
    { year: '2026 Est.', students: 7, cost: 9935 },
  ];

  const annualReports = [
    {
      year: '2025',
      title: 'Annual Impact Report 2025',
      type: 'Impact Report',
      size: '1.9 MB',
    },
    {
      year: '2025',
      title: 'Financial Statement 2025',
      type: 'Financials',
      size: '1.4 MB',
    },
  ];

  const grantAchievements = [
    {
      funder: 'Fundación Santo Domingo',
      amount: '$150,000',
      year: '2024',
      purpose: 'University Scholarship Expansion',
    },
    {
      funder: 'Coca-Cola Foundation',
      amount: '$100,000',
      year: '2024',
      purpose: 'Language Program Development',
    },
    {
      funder: 'Chevron Colombia',
      amount: '$75,000',
      year: '2023',
      purpose: 'STEM Education Initiatives',
    },
    {
      funder: 'British Council',
      amount: '$50,000',
      year: '2023',
      purpose: 'English Teacher Training',
    },
  ];

  const majorDonors = [
    'Fundación Santo Domingo',
    'Coca-Cola Foundation Colombia',
    'Chevron Corporation',
    'British Council Colombia',
    'Fulbright Commission',
    'Individual Donor Circle ($10,000+)',
    'Corporate Partners Coalition',
  ];

  const expenseRatioData = [
    { name: 'Program Services', value: 93.7, color: '#030213' },
    { name: 'Administrative', value: 6.3, color: '#00C49F' },
  ];

  const expenseTypeData = [
    { name: 'Tax/Legal', value: 6.3, color: '#FCD116' },
    { name: 'University Tuition', value: 93.7, color: '#CE1126' },
  ];

  const kpis = [
    { metric: 'Number of students served', value: '5', target: '5', status: 'On Track' },
    { metric: 'Number of scholarship awarded', value: '8', target: '6', status: 'Exceeding' },
    { metric: 'Program Expense Ratio', value: '93.7%', target: '90%', status: 'Exceeding' },
  ];

  const financialSummary = [
    { category: 'Total Revenue', amount: '$7,080' },
    { category: 'Total Expenses', amount: '$5,400' },
    { category: 'Program Expenses', amount: '93.7%  -  $5,062' },
    { category: 'Administrative Expenses', amount: '6.3%  -  $338.00' },
    { category: 'Fundraising Expenses', amount: '0%  -  $0.00' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-center font-bold text-2xl">
                  Transparency & Accountability
              </h2>
          <p className="max-w-3xl mx-auto">
            We are committed to transparency and responsible stewardship of every donation. Explore our financial reports, impact data, and organizational accountability.
          </p>
        </div>
      </section>

      {/* Lawful statement */}
      <section className="py-8 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-bold text-2xl">
                  Legal Status
          </h2>
          <p className="max-w-6x3 text-center mx-auto">
            ALZA Foundation is a U.S.-registered 501(c)(3) nonprofit organization, governed by a Board of Directors, which supports education access in Colombia.
          </p>        
        </div>
      </section>

      {/* Financial Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-bold text-2xl">
                  Financial Overview (Oct-Dec 2025)
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle><b>Expense Overview</b></CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-center mb-2"><b>Expense Allocation</b></h3>
                    <ResponsiveContainer width="100%" height={320}>
                      <PieChart>
                        <Pie
                          data={expenseRatioData}
                          cx="50%"
                          cy="45%"
                          labelLine={false}
                          label={({ value }) => `${value}%`}
                          outerRadius={60}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {expenseRatioData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }}/>
                      </PieChart>
                    </ResponsiveContainer>
                    <p className="text-center text-muted-foreground text-sm mt-2">
                      94 cents of every dollar goes directly to student programs
                    </p>
                  </div>

                  <div>
                    <h3 className="text-center mb-2"><b>Expense Type</b></h3>
                    <ResponsiveContainer width="100%" height={320}>
                      <PieChart>
                        <Pie
                          data={expenseTypeData}
                          cx="50%"
                          cy="45%"
                          labelLine={false}
                          label={({ value }) => `${value}%`}
                          outerRadius={60}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {expenseTypeData.map((entry, index) => (
                            <Cell key={`cell-expense-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }}/>
                      </PieChart>
                    </ResponsiveContainer>
                    <p className="text-center text-muted-foreground text-sm mt-2">
                      Breakdown of program expenses by type
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle><b>Financial Summary</b></CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {financialSummary.map((item, index) => (
                    <div className="flex justify-between items-center pb-3 border-b border-border last:border-0">
                      <div className="inline-flex items-center">
                        {index >= 2 && index <= 4 && (
                          <Dot size={16} className="text-primary" />
                        )}
                        <span className="text-muted-foreground ml-1">{item.category}</span>
                      </div>
                      <span>{item.amount}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          
              <Card>
                <CardHeader>
                  <CardTitle>Combined Costs of <b>University</b> Scholarships Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="96%" height={300}>
                    <ComposedChart data={studentUniversitySupportData} margin={{ left: 10, right: 10, top: 10, bottom: 10 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis 
                        yAxisId="left" 
                        label={{ value: 'Students', angle: -90, position: 'insideLeft', offset: 0 }} 
                      />
                      <YAxis 
                        yAxisId="right" 
                        orientation="right" 
                        label={{ value: 'Cost (USD)', angle: 90, position: 'insideRight', offset: 0 }}
                      />
                      <Tooltip 
                        formatter={(value, name) => {
                          if (name === 'cost') return [`$${value.toLocaleString()}`, 'Cost (USD)'];
                          return [value, 'Students'];
                        }}
                      />
                      <Legend />
                      <Bar yAxisId="right" dataKey="cost" fill="#FCD116" name="Cost (USD)" />
                      <Line yAxisId="left" type="monotone" dataKey="students" stroke="#030213" strokeWidth={2} name="Students" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

               <Card>
                <CardHeader>
                  <CardTitle>Combined Costs of <b>Foreign Language Class</b> Scholarships Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="96%" height={300}>
                    <ComposedChart data={studentLanguageSupportData} margin={{ left: 10, right: 10, top: 10, bottom: 10 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis 
                        yAxisId="left" 
                        label={{ value: 'Students', angle: -90, position: 'insideLeft', offset: 0 }} 
                      />
                      <YAxis 
                        yAxisId="right" 
                        orientation="right" 
                        label={{ value: 'Cost (USD)', angle: 90, position: 'insideRight', offset: 0 }}
                      />
                      <Tooltip 
                        formatter={(value, name) => {
                          if (name === 'cost') return [`$${value.toLocaleString()}`, 'Cost (USD)'];
                          return [value, 'Students'];
                        }}
                      />
                      <Legend />
                      <Bar yAxisId="right" dataKey="cost" fill="#003087" name="Cost (USD)" />
                      <Line yAxisId="left" type="monotone" dataKey="students" stroke="#030213" strokeWidth={2} name="Students" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
          </div>
          </div>
      </section>

      {/* Annual Reports */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <FileText size={32} />
            </div>
            <h2 className="mb-12 text-center font-bold text-2xl">
                  Annual Reports & Financial Statements
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Download our comprehensive annual reports and financial statements.
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Year</TableHead>
                    <TableHead>Document</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {annualReports.map((report, index) => (
                    <TableRow key={index}>
                      <TableCell>{report.year}</TableCell>
                      <TableCell>{report.title}</TableCell>
                      <TableCell>{report.type}</TableCell>
                      <TableCell>{report.size}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          <Download size={16} className="mr-2" />
                          Coming soon
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Performance Indicators 
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-bold text-2xl">
                  Key Performance Indicators (2025)
          </h2>
          <Card>
            <CardContent className="p-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Metric</TableHead>
                    <TableHead>Current Value</TableHead>
                    <TableHead>Target</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {kpis.map((kpi, index) => (
                    <TableRow key={index}>
                      <TableCell>{kpi.metric}</TableCell>
                      <TableCell>{kpi.value}</TableCell>
                      <TableCell>{kpi.target}</TableCell>
                      <TableCell>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          kpi.status === 'Exceeding' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {kpi.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>*/}

      {/* Accountability Statement */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-center font-bold">Our Commitment to Transparency and Accountability</h2>
          <div className="space-y-4 text-primary-foreground/90">
            <p>
              ALZA Foundation operates with the highest standards of financial accountability and programmatic transparency. We are committed to ensuring that every donation is used effectively and efficiently to support our students.
            </p>
            <p>
              We believe in open communication with our donors, partners, and stakeholders. If you have any questions about our finances, programs, or governance, please don't hesitate to contact us.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}