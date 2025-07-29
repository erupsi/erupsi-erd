import React, { useState, useEffect } from 'react';
import "./main.scss"
import erupsiLogo from "@assets/images/erupsi-icon.png";

import { 
    Home, 
    Calculator, 
    ShoppingCart, 
    Package, 
    FileText, 
    ChevronDown, 
    ChevronRight,
    Users,
    Briefcase,
    DollarSign,
    Factory,
    UserCheck,
    Award,
    FolderOpen,
    Headphones,
    Settings
} from 'lucide-react';


const Sidenav = () => {
    const [expandedItems, setExpandedItems] = useState({});
    const [activeItem, setActiveItem] = useState('Customer Profile');

    const toggleExpanded = (item) => {
        setExpandedItems(prev => ({
        ...prev,
        [item]: !prev[item]
        }));
    };

    const setActive = (item) => {
        setActiveItem(item);
    };

    const menuItems = [
        {
        id: 'dashboard',
        label: 'Dashboard',
        icon: Home,
        hasSubmenu: false
        },
        {
        id: 'overview',
        label: 'Overview',
        icon: FileText,
        hasSubmenu: true,
        expanded: true,
        children: [
            { id: 'customer-profile', label: 'Customer Profile' },
            { id: 'released', label: 'Released', badge: '8', badgeColor: 'bg-orange-400' },
            { id: 'comments', label: 'Comments' },
            { id: 'scheduled', label: 'Scheduled', badge: '3', badgeColor: 'bg-green-400' }
        ]
        },
        {
        id: 'accounting',
        label: 'Accounting',
        icon: Calculator,
        hasSubmenu: true,
        children: [
            { id: 'financial-reports', label: 'Laporan Keuangan' },
            { id: 'transactions', label: 'Transaksi' }
        ]
        },
        {
        id: 'buying',
        label: 'Buying',
        icon: ShoppingCart,
        hasSubmenu: true,
        children: [
            { id: 'requests', label: 'Permintaan' },
            { id: 'purchases', label: 'Pembelian' }
        ]
        },
        {
        id: 'selling',
        label: 'Selling',
        icon: DollarSign,
        hasSubmenu: true,
        children: [
            { id: 'sales', label: 'Penjualan' },
            { id: 'invoices', label: 'Invoice' },
            { id: 'orders', label: 'Order' }
        ]
        },
        {
        id: 'stock',
        label: 'Stock',
        icon: Package,
        hasSubmenu: true,
        children: [
            { id: 'inventory', label: 'Stok Barang' },
            { id: 'warehouse', label: 'Gudang' }
        ]
        },
        {
        id: 'assets',
        label: 'Assets',
        icon: Briefcase,
        hasSubmenu: false
        },
        {
        id: 'hr',
        label: 'HR',
        icon: Users,
        hasSubmenu: true,
        children: [
            { id: 'employee-data', label: 'Data Karyawan' },
            { id: 'attendance', label: 'Kehadiran' },
            { id: 'shifts', label: 'Shift' }
        ]
        },
        {
        id: 'payroll',
        label: 'Payroll',
        icon: UserCheck,
        hasSubmenu: true,
        children: [
            { id: 'salary', label: 'Gaji' },
            { id: 'payslips', label: 'Slip Gaji' },
            { id: 'taxes', label: 'Pajak' }
        ]
        },
        {
        id: 'manufacturing',
        label: 'Manufacturing',
        icon: Factory,
        hasSubmenu: true,
        children: [
            { id: 'bom', label: 'BOM' },
            { id: 'production', label: 'Produksi' },
            { id: 'planning', label: 'Rencana' }
        ]
        },
        {
        id: 'quality',
        label: 'Quality',
        icon: Award,
        hasSubmenu: true,
        children: [
            { id: 'quality-inspection', label: 'Pemeriksaan Kualitas' }
        ]
        },
        {
        id: 'projects',
        label: 'Projects',
        icon: FolderOpen,
        hasSubmenu: true,
        children: [
            { id: 'project-management', label: 'Proyek' },
            { id: 'tasks', label: 'Tugas' },
            { id: 'teams', label: 'Tim' }
        ]
        },
        {
        id: 'support',
        label: 'Support',
        icon: Headphones,
        hasSubmenu: true,
        children: [
            { id: 'tickets', label: 'Tiket' },
            { id: 'customers', label: 'Pelanggan' }
        ]
        },
        {
        id: 'preferences',
        label: 'Preferences',
        icon: Settings,
        hasSubmenu: false
        }
    ];

    // Initialize expanded state for overview
    useEffect(() => {
        setExpandedItems({ overview: true });
    }, []);

    const handleMouseEnter = (e, isActive) => {
        if (!isActive) {
        e.currentTarget.style.backgroundColor = '#f3f4f6';
        }
    };

    const handleMouseLeave = (e, isActive) => {
        if (!isActive) {
        e.currentTarget.style.backgroundColor = 'transparent';
        }
    };

    return (
        <>
        <nav>
            {/* Header */}
            <div className='nav_top'>
                <div>
                    <img src={erupsiLogo} alt="Erupsi Logo"/>
                    <div>
                        <h1>ERUPSI-ERP</h1>
                        <h2>Asset Management Platform</h2>
                    </div>
                </div>
            </div>

            {/* Menu Items - Scrollable */}
            <div style={{
                flex: 1,
                overflowY: 'auto',
                paddingLeft: '8px',
                marginLeft: '-8px',
                direction: 'rtl'
            }}>
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '8px',
                direction: 'ltr'
            }}>
                {menuItems.map((item) => {
                const Icon = item.icon;
                const isExpanded = expandedItems[item.id];
                
                return (
                    <div key={item.id}>
                    {/* Main Menu Item */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '12px 16px',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            backgroundColor: activeItem === item.id ? '#2563eb' : 'transparent',
                            color: activeItem === item.id ? 'white' : '#374151'
                        }}
                        onClick={() => {
                        if (item.hasSubmenu) {
                            toggleExpanded(item.id);
                        } else {
                            setActive(item.id);
                        }
                        }}
                        onMouseEnter={(e) => handleMouseEnter(e, activeItem === item.id)}
                        onMouseLeave={(e) => handleMouseLeave(e, activeItem === item.id)}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Icon size={20} />
                        <span style={{ fontWeight: 500 }}>{item.label}</span>
                        </div>
                        {item.hasSubmenu && (
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            transform: isExpanded ? 'rotate(0deg)' : 'rotate(-90deg)',
                            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}>
                            <ChevronDown size={16} />
                        </div>
                        )}
                    </div>

                    {/* Submenu Items with Animation */}
                    {item.hasSubmenu && (
                        <div
                        style={{
                            marginLeft: '24px',
                            marginTop: '8px',
                            maxHeight: isExpanded ? `${(item.children?.length || 0) * 48}px` : '0px',
                            opacity: isExpanded ? 1 : 0,
                            overflow: 'hidden',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            transform: isExpanded ? 'translateY(0)' : 'translateY(-10px)'
                        }}
                        >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            {item.children?.map((child) => (
                            <div
                                key={child.id}
                                style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '10px 16px',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                backgroundColor: (activeItem === child.label || child.active) ? '#2563eb' : 'transparent',
                                color: (activeItem === child.label || child.active) ? 'white' : '#6b7280'
                                }}
                                onClick={() => setActive(child.label)}
                                onMouseEnter={(e) => handleMouseEnter(e, activeItem === child.label || child.active)}
                                onMouseLeave={(e) => handleMouseLeave(e, activeItem === child.label || child.active)}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    backgroundColor: 'currentColor',
                                    opacity: 0.5
                                }}></div>
                                <span style={{ fontSize: '14px' }}>{child.label}</span>
                                </div>
                                {child.badge && (
                                <span style={{
                                    padding: '4px 8px',
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    color: 'white',
                                    borderRadius: '20px',
                                    backgroundColor: child.badgeColor === 'bg-orange-400' ? '#fb923c' : 
                                                child.badgeColor === 'bg-green-400' ? '#4ade80' : '#9ca3af'
                                }}>
                                    {child.badge}
                                </span>
                                )}
                            </div>
                            ))}
                        </div>
                        </div>
                    )}
                    </div>
                );
                })}
            </div>
            </div>

            {/* Bottom Section - Inbox */}
            <div style={{
            borderTop: '1px solid #e5e7eb',
            paddingTop: '16px',
            marginTop: '16px'
            }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px 16px',
                marginBottom: '12px'
            }}>
                <span style={{
                color: '#9ca3af',
                fontSize: '14px',
                fontWeight: 500
                }}>Inbox</span>
                <span style={{
                backgroundColor: '#ef4444',
                color: 'white',
                fontSize: '12px',
                fontWeight: 600,
                padding: '4px 8px',
                borderRadius: '20px'
                }}>6</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '8px 16px',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                <div style={{
                    width: '16px',
                    height: '16px',
                    backgroundColor: '#3b82f6',
                    borderRadius: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <span style={{ color: 'white', fontSize: '10px', fontWeight: 'bold' }}>⇅</span>
                </div>
                <div>
                    <div style={{ fontSize: '14px', fontWeight: 500, color: '#374151' }}>Pesanan masuk</div>
                    <div style={{ fontSize: '12px', color: '#9ca3af' }}>From B2B has been...</div>
                </div>
                </div>

                <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '8px 16px',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                <div style={{
                    width: '16px',
                    height: '16px',
                    backgroundColor: '#374151',
                    borderRadius: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <span style={{ color: 'white', fontSize: '10px', fontWeight: 'bold' }}>📋</span>
                </div>
                <div>
                    <div style={{ fontSize: '14px', fontWeight: 500, color: '#374151' }}>Pesanan dikirim</div>
                    <div style={{ fontSize: '12px', color: '#9ca3af' }}>From B2B has been...</div>
                </div>
                </div>

                <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '8px 16px',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                <div style={{
                    width: '16px',
                    height: '16px',
                    backgroundColor: '#10b981',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <span style={{ color: 'white', fontSize: '10px', fontWeight: 'bold' }}>✓</span>
                </div>
                <div>
                    <div style={{ fontSize: '14px', fontWeight: 500, color: '#374151' }}>Pesanan selesai</div>
                    <div style={{ fontSize: '12px', color: '#9ca3af' }}>From B2B has been...</div>
                </div>
                </div>

                <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '8px 16px',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                <div style={{
                    width: '16px',
                    height: '16px',
                    backgroundColor: '#ef4444',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <span style={{ color: 'white', fontSize: '10px', fontWeight: 'bold' }}>!</span>
                </div>
                <div>
                    <div style={{ fontSize: '14px', fontWeight: 500, color: '#374151' }}>Complaints</div>
                    <div style={{ fontSize: '12px', color: '#9ca3af' }}>Asrog B2SOM has been...</div>
                </div>
                </div>
            </div>
            </div>
        </nav>
        </>
    );
};

export default Sidenav;