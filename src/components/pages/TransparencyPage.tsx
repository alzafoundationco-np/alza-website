import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend, ComposedChart } from 'recharts';
import { FileText, Download, Award, DollarSign, ChevronRight,CircleSmall, Dot } from 'lucide-react';
import { Button } from '../ui/button';
import { useTranslation } from 'react-i18next';

interface TransparencyPageProps {
  onNavigate: (page: string) => void;
}

export function TransparencyPage({ onNavigate }: TransparencyPageProps) {
  const { t } = useTranslation();

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
      title: t('annual-impact-report-2025'),
      type: t('impact-report'),
      size: '1.9 MB',
    },
    {
      year: '2025',
      title: t('financial-statement-2025'),
      type: t('financials'),
      size: '1.4 MB',
    },
  ];

  /*const grantAchievements = [
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
  ];*/

  const expenseRatioData = [
    { name: t('program-services'), value: 93.7, color: '#030213' },
    { name: t('administrative'), value: 6.3, color: '#00C49F' },
  ];

  const expenseTypeData = [
    { name: t('tax-legal'), value: 6.3, color: '#FCD116' },
    { name: t('university-tuition'), value: 93.7, color: '#CE1126' },
  ];

  /*const kpis = [
    { metric: 'Number of students served', value: '5', target: '5', status: 'On Track' },
    { metric: 'Number of scholarship awarded', value: '8', target: '6', status: 'Exceeding' },
    { metric: 'Program Expense Ratio', value: '93.7%', target: '90%', status: 'Exceeding' },
  ];*/

  const financialSummary = [
    { category: t('total-revenue'), amount: '$7,080' },
    { category: t('total-expenses'), amount: '$5,400' },
    { category: t('program-expenses'), amount: '93.7%  -  $5,062' },
    { category: t('administrative-expenses'), amount: '6.3%  -  $338.00' },
    { category: t('fundraising-expenses'), amount: '0%  -  $0.00' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-center font-bold text-2xl">
                  {t('transparency-title')}
              </h2>
          <p className="max-w-3xl mx-auto">
            {t('transparency_presentation')}
          </p>
        </div>
      </section>

      {/* Lawful statement */}
      <section className="py-8 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-bold text-2xl">
                  {t('legal-status')}
          </h2>
          <p className="max-w-6x3 text-center mx-auto">
            {t('alza-legal')}
          </p>        
        </div>
      </section>

      {/* Financial Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-bold text-2xl">
                  {t('financial_overview')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle><b>{t('expense-overview')}</b></CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-center mb-2"><b>{t('expense-allocation')}</b></h3>
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
                      {t('expenses_explanation')}
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
                      {t('graph_breakdown')}
                    </p>
                  </div>
                </div>
                <p className="text-center text-muted-foreground italic text-sm mt-6">
                  {t('alza_volunteer_statement')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle><b>{t('financial-summary')}</b></CardTitle>
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
                  <CardTitle>{t('graph_combined1')} <b>{t('graph_student_university2')}</b> {t('scholarships')} {t('over_time')}</CardTitle>
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
                  <CardTitle>{t('graph_combined1')} <b>{t('foreign-language-class')}</b> {t('scholarships')} {t('over_time')}</CardTitle>
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
                  {t('annual-reports-and-financial-statements')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('reports_financials_download')}
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t('year')}</TableHead>
                    <TableHead>{t('document')}</TableHead>
                    <TableHead>{t('type')}</TableHead>
                    <TableHead>{t('size')}</TableHead>
                    <TableHead>{t('action')}</TableHead>
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
                          {t('coming-soon')}
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
          <h2 className="mb-6 text-center font-bold">{t('transparency_commitment')}</h2>
          <div className="space-y-4 text-primary-foreground/90">
            <p>
              {t('transparency_commitment_text1')}
            </p>
            <p>
              {t('transparency_commitment_text2')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}