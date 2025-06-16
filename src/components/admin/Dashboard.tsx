import React, { useEffect, useState } from 'react';
import { 
  BarChart3, 
  Users, 
  FileText, 
  Image, 
  TrendingUp, 
  Activity,
  Globe,
  Settings,
  Calendar,
  Clock,
  Layout
} from 'lucide-react';
import { useAdmin } from '../../contexts/AdminContext';

const Dashboard = () => {
  const { siteContent, siteSettings, mediaFiles } = useAdmin();
  const [stats, setStats] = useState({
    totalPages: 0,
    totalSections: 0,
    totalMedia: 0,
    lastUpdated: null as string | null
  });

  useEffect(() => {
    // Calculate stats
    const pages = [...new Set(siteContent.map(item => item.page))];
    const sections = [...new Set(siteContent.map(item => item.section))];
    const lastUpdate = siteContent.length > 0 
      ? siteContent.reduce((latest, item) => 
          new Date(item.updated_at) > new Date(latest) ? item.updated_at : latest, 
          siteContent[0].updated_at
        )
      : null;

    setStats({
      totalPages: pages.length,
      totalSections: sections.length,
      totalMedia: mediaFiles.length,
      lastUpdated: lastUpdate
    });
  }, [siteContent, mediaFiles]);

  const quickStats = [
    {
      title: 'Total Pages',
      value: stats.totalPages,
      icon: <FileText className="h-8 w-8" />,
      color: 'bg-main-green',
      change: '+2 this week'
    },
    {
      title: 'Content Sections',
      value: stats.totalSections,
      icon: <Layout className="h-8 w-8" />,
      color: 'bg-secondary-green',
      change: '+5 this week'
    },
    {
      title: 'Media Files',
      value: stats.totalMedia,
      icon: <Image className="h-8 w-8" />,
      color: 'bg-accent-green',
      change: '+12 this week'
    },
    {
      title: 'Site Visitors',
      value: '2,450',
      icon: <Users className="h-8 w-8" />,
      color: 'bg-blue-500',
      change: '+15% this week'
    }
  ];

  const recentActivities = [
    {
      action: 'Updated Hero Section',
      page: 'Home Page',
      time: '2 hours ago',
      user: 'Admin'
    },
    {
      action: 'Added new testimonial',
      page: 'Customer Testimonials',
      time: '5 hours ago',
      user: 'Admin'
    },
    {
      action: 'Uploaded new media',
      page: 'Media Library',
      time: '1 day ago',
      user: 'Admin'
    },
    {
      action: 'Updated pricing plans',
      page: 'Pricing Page',
      time: '2 days ago',
      user: 'Admin'
    }
  ];

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Never';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Calendar className="h-4 w-4" />
          <span>Today: {new Date().toLocaleDateString()}</span>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} p-3 rounded-lg text-white`}>
                {stat.icon}
              </div>
              <div className="text-xs font-medium text-gray-500 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                {stat.change}
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.title}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-800">Recent Activity</h3>
            <button className="text-sm text-main-green hover:text-secondary-green transition-colors duration-200">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                <div className="bg-background-green p-2 rounded-lg">
                  <Activity className="h-5 w-5 text-main-green" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-gray-800">{activity.action}</div>
                    <div className="text-xs text-gray-500">{activity.time}</div>
                  </div>
                  <div className="text-sm text-gray-600">{activity.page}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Quick Actions</h3>
          <div className="space-y-3">
            <a href="/admin/pages/home/hero" className="flex items-center space-x-3 p-3 bg-background-green rounded-lg hover:bg-main-green/10 transition-colors duration-200">
              <FileText className="h-5 w-5 text-main-green" />
              <span className="text-gray-800">Edit Home Page</span>
            </a>
            <a href="/admin/media" className="flex items-center space-x-3 p-3 bg-background-green rounded-lg hover:bg-main-green/10 transition-colors duration-200">
              <Image className="h-5 w-5 text-main-green" />
              <span className="text-gray-800">Upload Media</span>
            </a>
            <a href="/admin/settings/general" className="flex items-center space-x-3 p-3 bg-background-green rounded-lg hover:bg-main-green/10 transition-colors duration-200">
              <Settings className="h-5 w-5 text-main-green" />
              <span className="text-gray-800">Site Settings</span>
            </a>
            <a href="/" target="_blank" className="flex items-center space-x-3 p-3 bg-background-green rounded-lg hover:bg-main-green/10 transition-colors duration-200">
              <Globe className="h-5 w-5 text-main-green" />
              <span className="text-gray-800">View Website</span>
            </a>
          </div>

          {/* System Status */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h4 className="text-sm font-semibold text-gray-700 mb-4">System Status</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">Last Content Update</div>
                <div className="text-sm font-medium text-gray-800 flex items-center">
                  <Clock className="h-4 w-4 mr-1 text-main-green" />
                  {formatDate(stats.lastUpdated)}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">Database Status</div>
                <div className="text-sm font-medium text-green-600 flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                  Healthy
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">Storage Usage</div>
                <div className="text-sm font-medium text-gray-800">
                  {(stats.totalMedia * 2.5).toFixed(1)} MB / 5 GB
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Chart Placeholder */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-gray-800">Website Performance</h3>
          <div className="flex items-center space-x-2">
            <button className="text-xs bg-background-green text-main-green px-3 py-1 rounded-full">
              Last 7 Days
            </button>
            <button className="text-xs text-gray-600 px-3 py-1 rounded-full">
              Last 30 Days
            </button>
          </div>
        </div>
        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
          <div className="text-center">
            <BarChart3 className="h-12 w-12 text-gray-300 mx-auto mb-2" />
            <p className="text-gray-500">Performance metrics will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;