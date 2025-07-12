// Configuración y datos iniciales
const CONFIG = {
    ADMIN_PASSWORD: 'pikao2025',
    WHATSAPP_NUMBER: '573229235925',
    STORAGE_KEYS: {
        CART: 'pikao_cart',
        THEME: 'pikao_theme',
        MENU: 'pikao_menu'
    }
};

// Datos del menú inicial
const INITIAL_MENU_ITEMS = [
    // Menú Pikao's
    {
        id: "1",
        name: "Pechuga en salsa de queso",
        description: "Deliciosa pechuga de pollo bañada en cremosa salsa de queso, acompañada de contorno",
        price: 29000,
        category: "Menu Pikaos",
        image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=300&h=200&fit=crop"
    },
    {
        id: "2",
        name: "Pechuga en salsa de champiñón",
        description: "Pechuga de pollo con exquisita salsa de champiñones frescos",
        price: 32000,
        category: "Menu Pikaos",
        image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=300&h=200&fit=crop"
    },
    {
        id: "3",
        name: "Pechuga a la plancha",
        description: "Pechuga de pollo a la plancha, saludable y deliciosa con vegetales",
        price: 25000,
        category: "Menu Pikaos",
        image: "https://images.unsplash.com/photo-1598514982901-ae62764ae95e?w=300&h=200&fit=crop"
    },
    {
        id: "4",
        name: "Pechuga gratinada",
        description: "Pechuga de pollo gratinada al horno con queso derretido",
        price: 32000,
        category: "Menu Pikaos",
        image: "https://images.unsplash.com/photo-1598514982901-ae62764ae95e?w=300&h=200&fit=crop"
    },
    {
        id: "5",
        name: "Pollo crispy",
        description: "Pollo crujiente estilo crispy con papas fritas",
        price: 25000,
        category: "Menu Pikaos",
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=300&h=200&fit=crop"
    },

    // Marisquería y Pescado
    {
        id: "6",
        name: "Cazuela",
        description: "Tradicional cazuela de mariscos con camarones, pulpo y pescado",
        price: 45000,
        category: "Marisqueria",
        image: "https://images.unsplash.com/photo-1559847844-d721426d6edc?w=300&h=200&fit=crop"
    },
    {
        id: "7",
        name: "Robalo",
        description: "Robalo fresco apanado, al ajillo o a la plancha",
        price: 38000,
        category: "Marisqueria",
        image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=300&h=200&fit=crop"
    },
    {
        id: "8",
        name: "Ceviche con patacón",
        description: "Fresco ceviche de pescado acompañado de patacón crujiente",
        price: 30000,
        category: "Marisqueria",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop"
    },
    {
        id: "9",
        name: "Coctel de camarones",
        description: "Delicioso coctel de camarones frescos con salsa especial",
        price: 30000,
        category: "Marisqueria",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=200&fit=crop"
    },

    // Comidas Rápidas
    {
        id: "10",
        name: "Burrito",
        description: "Tortilla con carne, pollo, cerdo, maíz, huevo, queso, vegetales y salsas",
        price: 23000,
        category: "Comidas Rapidas",
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop"
    },
    {
        id: "11",
        name: "Arepa",
        description: "Arepa rellena con carne, pollo, cerdo, huevo y queso",
        price: 15000,
        category: "Comidas Rapidas",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop"
    },
    {
        id: "12",
        name: "Sándwich",
        description: "Sándwich con pollo, huevo frito, tocineta, queso y vegetales",
        price: 18000,
        category: "Comidas Rapidas",
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=300&h=200&fit=crop"
    },
    {
        id: "13",
        name: "Alitas BBQ",
        description: "Alitas de pollo BBQ con papas fritas y ensalada",
        price: 25000,
        category: "Comidas Rapidas",
        image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=300&h=200&fit=crop"
    },
    {
        id: "14",
        name: "Hamburguesa Especial",
        description: "Hamburguesa con carne, pollo crispy, jamón, huevo, tocineta, queso, vegetales y papas",
        price: 25000,
        category: "Comidas Rapidas",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop"
    },
    {
        id: "15",
        name: "Hamburguesa Pikao's",
        description: "Nuestra hamburguesa especial con todos los ingredientes: carne, pollo, chorizo, quesos, vegetales y más",
        price: 30000,
        category: "Comidas Rapidas",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop"
    },

    // Bebidas
    {
        id: "16",
        name: "Frappe y jugos",
        description: "Variedad de jugos naturales: Mora, Fresa, Melón, Guanábana, Mango, Piña y más",
        price: 12000,
        category: "Bebidas",
        image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=300&h=200&fit=crop"
    },
    {
        id: "17",
        name: "Cerezada Limonada",
        description: "Refrescante cerezada limonada, perfecta para el calor",
        price: 12000,
        category: "Bebidas",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=200&fit=crop"
    },
    {
        id: "18",
        name: "Cerveza",
        description: "Cerveza fría nacional",
        price: 4900,
        category: "Bebidas",
        image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=300&h=200&fit=crop"
    },
    {
        id: "19",
        name: "Gaseosa",
        description: "Gaseosa personal de tu sabor favorito",
        price: 4000,
        category: "Bebidas",
        image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=300&h=200&fit=crop"
    }
];

const CATEGORIES = ["Todos", "Menu Pikaos", "Marisqueria", "Comidas Rapidas", "Bebidas"];

// Estado de la aplicación
class AppState {
    constructor() {
        this.menuItems = this.loadMenuItems();
        this.cart = this.loadCart();
        this.selectedCategory = "Todos";
        this.searchTerm = "";
        this.isAdmin = false;
        this.editingItemId = null;
        this.isDarkMode = this.loadTheme();
    }

    loadMenuItems() {
        const saved = localStorage.getItem(CONFIG.STORAGE_KEYS.MENU);
        return saved ? JSON.parse(saved) : [...INITIAL_MENU_ITEMS];
    }

    saveMenuItems() {
        localStorage.setItem(CONFIG.STORAGE_KEYS.MENU, JSON.stringify(this.menuItems));
    }

    loadCart() {
        const saved = localStorage.getItem(CONFIG.STORAGE_KEYS.CART);
        return saved ? JSON.parse(saved) : [];
    }

    saveCart() {
        localStorage.setItem(CONFIG.STORAGE_KEYS.CART, JSON.stringify(this.cart));
    }

    loadTheme() {
        return localStorage.getItem(CONFIG.STORAGE_KEYS.THEME) === 'dark';
    }

    saveTheme() {
        localStorage.setItem(CONFIG.STORAGE_KEYS.THEME, this.isDarkMode ? 'dark' : 'light');
    }

    getFilteredItems() {
        return this.menuItems.filter(item => {
            const matchesCategory = this.selectedCategory === "Todos" || item.category === this.selectedCategory;
            const matchesSearch = item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                                item.description.toLowerCase().includes(this.searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }

    getTotalItems() {
        return this.cart.reduce((total, item) => total + item.quantity, 0);
    }

    getTotalPrice() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
}

// Utilidades
class Utils {
    static formatPrice(price) {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        }).format(price);
    }

    static formatPriceInput(value) {
        const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
        return numericValue.toLocaleString('es-CO');
    }

    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    static showNotification(message, type = 'info') {
        // Crear notificación temporal
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 9999;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            animation: slideInRight 0.3s ease-out;
        `;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        `;
        
        document.body.appendChild(notification);
        
        // Remover después de 3 segundos
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    static generateId() {
        return Date.now().toString() + Math.random().toString(36).substr(2, 9);
    }
}

// Aplicación principal
class PikaosApp {
    constructor() {
        this.state = new AppState();
        this.init();
    }

    init() {
        this.setupDOM();
        this.applyTheme();
        this.renderCategories();
        this.renderMenu();
        this.updateCartUI();
        this.setupEventListeners();
    }

    setupDOM() {
        this.elements = {
            // Header
            darkModeBtn: document.getElementById('darkModeBtn'),
            adminBtn: document.getElementById('adminBtn'),
            cartBtn: document.getElementById('cartBtn'),
            cartCount: document.getElementById('cartCount'),
            
            // Admin Panel
            adminPanel: document.getElementById('adminPanel'),
            addItemBtn: document.getElementById('addItemBtn'),
            logoutBtn: document.getElementById('logoutBtn'),
            
            // Search and Filters
            searchInput: document.getElementById('searchInput'),
            categoriesContainer: document.getElementById('categoriesContainer'),
            
            // Menu
            menuGrid: document.getElementById('menuGrid'),
            noResults: document.getElementById('noResults'),
            
            // Modals
            cartModal: document.getElementById('cartModal'),
            adminLoginModal: document.getElementById('adminLoginModal'),
            itemFormModal: document.getElementById('itemFormModal'),
            
            // Cart Modal
            closeCartBtn: document.getElementById('closeCartBtn'),
            cartItems: document.getElementById('cartItems'),
            emptyCart: document.getElementById('emptyCart'),
            cartSummary: document.getElementById('cartSummary'),
            totalPrice: document.getElementById('totalPrice'),
            customerName: document.getElementById('customerName'),
            orderNote: document.getElementById('orderNote'),
            confirmOrderBtn: document.getElementById('confirmOrderBtn'),
            
            // Admin Login Modal
            closeAdminLoginBtn: document.getElementById('closeAdminLoginBtn'),
            adminPassword: document.getElementById('adminPassword'),
            loginBtn: document.getElementById('loginBtn'),
            loginError: document.getElementById('loginError'),
            
            // Item Form Modal
            closeFormBtn: document.getElementById('closeFormBtn'),
            itemForm: document.getElementById('itemForm'),
            formTitle: document.getElementById('formTitle'),
            saveButtonText: document.getElementById('saveButtonText'),
            cancelFormBtn: document.getElementById('cancelFormBtn'),
            itemName: document.getElementById('itemName'),
            itemDescription: document.getElementById('itemDescription'),
            itemPrice: document.getElementById('itemPrice'),
            itemCategory: document.getElementById('itemCategory'),
            itemImage: document.getElementById('itemImage')
        };
    }

    setupEventListeners() {
        // Header events
        this.elements.darkModeBtn?.addEventListener('click', () => this.toggleDarkMode());
        this.elements.adminBtn?.addEventListener('click', () => this.handleAdminButton());
        this.elements.cartBtn?.addEventListener('click', () => this.showCart());
        
        // Admin panel events
        this.elements.addItemBtn?.addEventListener('click', () => this.showAddItemForm());
        this.elements.logoutBtn?.addEventListener('click', () => this.adminLogout());
        
        // Search events
        this.elements.searchInput?.addEventListener('input', 
            Utils.debounce((e) => this.handleSearch(e.target.value), 300)
        );
        
        // Cart modal events
        this.elements.closeCartBtn?.addEventListener('click', () => this.hideCart());
        this.elements.confirmOrderBtn?.addEventListener('click', () => this.confirmOrder());
        
        // Admin login modal events
        this.elements.closeAdminLoginBtn?.addEventListener('click', () => this.hideAdminLogin());
        this.elements.loginBtn?.addEventListener('click', () => this.adminLogin());
        this.elements.adminPassword?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.adminLogin();
        });
        
        // Item form modal events
        this.elements.closeFormBtn?.addEventListener('click', () => this.hideItemForm());
        this.elements.cancelFormBtn?.addEventListener('click', () => this.hideItemForm());
        this.elements.itemForm?.addEventListener('submit', (e) => this.saveItem(e));
        this.elements.itemPrice?.addEventListener('input', (e) => {
            e.target.value = Utils.formatPriceInput(e.target.value);
        });
        
        // Modal overlay events
        [this.elements.cartModal, this.elements.adminLoginModal, this.elements.itemFormModal].forEach(modal => {
            modal?.addEventListener('click', (e) => {
                if (e.target === modal || e.target.classList.contains('modal-overlay')) {
                    modal.classList.add('hidden');
                }
            });
        });
    }

    // Tema
    toggleDarkMode() {
        this.state.isDarkMode = !this.state.isDarkMode;
        this.state.saveTheme();
        this.applyTheme();
    }

    applyTheme() {
        if (this.state.isDarkMode) {
            document.body.classList.add('dark');
            this.elements.darkModeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            document.body.classList.remove('dark');
            this.elements.darkModeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }

    // Administración
    handleAdminButton() {
        if (this.state.isAdmin) {
            this.adminLogout();
        } else {
            this.showAdminLogin();
        }
    }

    showAdminLogin() {
        this.elements.adminLoginModal.classList.remove('hidden');
        this.elements.adminPassword.focus();
        this.elements.loginError.classList.add('hidden');
    }

    hideAdminLogin() {
        this.elements.adminLoginModal.classList.add('hidden');
        this.elements.adminPassword.value = '';
        this.elements.loginError.classList.add('hidden');
    }

    adminLogin() {
        const password = this.elements.adminPassword.value;
        if (password === CONFIG.ADMIN_PASSWORD) {
            this.state.isAdmin = true;
            this.hideAdminLogin();
            this.showAdminPanel();
            this.renderMenu();
            Utils.showNotification('Sesión de administrador iniciada', 'success');
        } else {
            this.elements.loginError.classList.remove('hidden');
            this.elements.adminPassword.value = '';
            this.elements.adminPassword.focus();
        }
    }

    adminLogout() {
        this.state.isAdmin = false;
        this.hideAdminPanel();
        this.renderMenu();
        Utils.showNotification('Sesión de administrador cerrada', 'info');
    }

    showAdminPanel() {
        this.elements.adminPanel.classList.remove('hidden');
        this.elements.adminBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i> Salir';
    }

    hideAdminPanel() {
        this.elements.adminPanel.classList.add('hidden');
        this.elements.adminBtn.textContent = 'Admin';
    }

    // Búsqueda y filtros
    handleSearch(searchTerm) {
        this.state.searchTerm = searchTerm;
        this.renderMenu();
    }

    handleCategoryFilter(category) {
        this.state.selectedCategory = category;
        this.renderCategories();
        this.renderMenu();
    }

    renderCategories() {
        if (!this.elements.categoriesContainer) return;
        
        this.elements.categoriesContainer.innerHTML = CATEGORIES.map(category => `
            <button class="category-btn ${this.state.selectedCategory === category ? 'active' : ''}" 
                    data-category="${category}">
                ${category}
            </button>
        `).join('');

        // Agregar event listeners
        this.elements.categoriesContainer.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.handleCategoryFilter(e.target.dataset.category);
            });
        });
    }

    // Menú
    renderMenu() {
        const filteredItems = this.state.getFilteredItems();
        
        if (filteredItems.length === 0) {
            this.elements.menuGrid.classList.add('hidden');
            this.elements.noResults.classList.remove('hidden');
        } else {
            this.elements.menuGrid.classList.remove('hidden');
            this.elements.noResults.classList.add('hidden');
            
            this.elements.menuGrid.innerHTML = filteredItems.map(item => this.createMenuItemHTML(item)).join('');
            
            // Agregar event listeners
            filteredItems.forEach(item => {
                const addBtn = document.getElementById(`add-${item.id}`);
                addBtn?.addEventListener('click', () => this.addToCart(item));
                
                if (this.state.isAdmin) {
                    const editBtn = document.getElementById(`edit-${item.id}`);
                    const deleteBtn = document.getElementById(`delete-${item.id}`);
                    
                    editBtn?.addEventListener('click', () => this.editItem(item));
                    deleteBtn?.addEventListener('click', () => this.deleteItem(item.id));
                }
            });
        }
    }

    createMenuItemHTML(item) {
        const adminButtons = this.state.isAdmin ? `
            <button id="edit-${item.id}" class="btn btn-outline btn-sm" style="color: #3b82f6; border-color: #3b82f6;">
                <i class="fas fa-edit"></i> Editar
            </button>
            <button id="delete-${item.id}" class="btn btn-outline btn-sm" style="color: #ef4444; border-color: #ef4444;">
                <i class="fas fa-trash"></i> Eliminar
            </button>
        ` : '';
        
        return `
            <div class="menu-item fade-in">
                <div class="item-image">
                    <img src="${item.image}" alt="${item.name}" 
                         onerror="this.src='https://via.placeholder.com/300x200/facc15/000000?text=Sin+Imagen'"
                         loading="lazy">
                </div>
                <div class="item-content">
                    <h3 class="item-title">${item.name}</h3>
                    <p class="item-description">${item.description}</p>
                    <div class="item-footer">
                        <span class="item-price">${Utils.formatPrice(item.price)}</span>
                        <div class="item-actions">
                            <button id="add-${item.id}" class="btn btn-primary">
                                <i class="fas fa-plus"></i> Agregar
                            </button>
                            ${adminButtons}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Carrito
    addToCart(item) {
        const existingItem = this.state.cart.find(cartItem => cartItem.id === item.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.state.cart.push({ ...item, quantity: 1 });
        }
        
        this.updateCartUI();
        this.state.saveCart();
        
        // Animación del botón
        const addBtn = document.getElementById(`add-${item.id}`);
        if (addBtn) {
            addBtn.classList.add('bounce');
            setTimeout(() => addBtn.classList.remove('bounce'), 1000);
        }
        
        Utils.showNotification(`${item.name} agregado al carrito`, 'success');
    }

    updateCartUI() {
        const totalItems = this.state.getTotalItems();
        
        if (totalItems > 0) {
            this.elements.cartCount.textContent = totalItems;
            this.elements.cartCount.classList.remove('hidden');
        } else {
            this.elements.cartCount.classList.add('hidden');
        }
    }

    showCart() {
        this.elements.cartModal.classList.remove('hidden');
        this.renderCartItems();
    }

    hideCart() {
        this.elements.cartModal.classList.add('hidden');
    }

    renderCartItems() {
        if (this.state.cart.length === 0) {
            this.elements.emptyCart.classList.remove('hidden');
            this.elements.cartSummary.classList.add('hidden');
            this.elements.cartItems.innerHTML = '';
        } else {
            this.elements.emptyCart.classList.add('hidden');
            this.elements.cartSummary.classList.remove('hidden');
            
            this.elements.cartItems.innerHTML = this.state.cart.map(item => this.createCartItemHTML(item)).join('');
            
            // Agregar event listeners
            this.state.cart.forEach(item => {
                const decreaseBtn = document.getElementById(`decrease-${item.id}`);
                const increaseBtn = document.getElementById(`increase-${item.id}`);
                const removeBtn = document.getElementById(`remove-${item.id}`);
                
                decreaseBtn?.addEventListener('click', () => this.updateQuantity(item.id, item.quantity - 1));
                increaseBtn?.addEventListener('click', () => this.updateQuantity(item.id, item.quantity + 1));
                removeBtn?.addEventListener('click', () => this.removeFromCart(item.id));
            });
            
            this.updateCartTotal();
        }
    }

    createCartItemHTML(item) {
        return `
            <div class="cart-item slide-in-up">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${Utils.formatPrice(item.price)}</p>
                </div>
                <div class="cart-item-controls">
                    <button id="decrease-${item.id}" class="quantity-btn">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantity">${item.quantity}</span>
                    <button id="increase-${item.id}" class="quantity-btn">
                        <i class="fas fa-plus"></i>
                    </button>
                    <button id="remove-${item.id}" class="remove-btn" title="Eliminar del carrito">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    }

    updateQuantity(id, newQuantity) {
        if (newQuantity === 0) {
            this.removeFromCart(id);
        } else {
            const item = this.state.cart.find(item => item.id === id);
            if (item) {
                item.quantity = newQuantity;
                this.renderCartItems();
                this.updateCartUI();
                this.state.saveCart();
            }
        }
    }

    removeFromCart(id) {
        const item = this.state.cart.find(item => item.id === id);
        this.state.cart = this.state.cart.filter(item => item.id !== id);
        this.renderCartItems();
        this.updateCartUI();
        this.state.saveCart();
        
        if (item) {
            Utils.showNotification(`${item.name} eliminado del carrito`, 'info');
        }
    }

    updateCartTotal() {
        const total = this.state.getTotalPrice();
        this.elements.totalPrice.textContent = Utils.formatPrice(total);
    }

    confirmOrder() {
        if (this.state.cart.length === 0) {
            Utils.showNotification('El carrito está vacío', 'error');
            return;
        }

        const customerName = this.elements.customerName.value.trim();
        const orderNote = this.elements.orderNote.value.trim();
        
        let message = 'Hola, quiero hacer un pedido:\n\n';
        
        if (customerName) {
            message += `Cliente: ${customerName}\n\n`;
        }
        
        this.state.cart.forEach(item => {
            message += `- ${item.quantity} x ${item.name}\n`;
        });
        
        const total = this.state.getTotalPrice();
        message += `\nTotal: ${Utils.formatPrice(total)}\n`;
        
        if (orderNote) {
            message += `\nNota: ${orderNote}\n`;
        }
        
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
        
        // Limpiar carrito después de confirmar
        this.state.cart = [];
        this.state.saveCart();
        this.updateCartUI();
        this.hideCart();
        
        // Limpiar formulario
        this.elements.customerName.value = '';
        this.elements.orderNote.value = '';
        
        Utils.showNotification('Pedido enviado por WhatsApp', 'success');
    }

    // Gestión de items (Admin)
    showAddItemForm() {
        this.state.editingItemId = null;
        this.elements.formTitle.innerHTML = '<i class="fas fa-plus"></i> Agregar Nuevo Plato';
        this.elements.saveButtonText.textContent = 'Agregar Plato';
        this.clearItemForm();
        this.elements.itemFormModal.classList.remove('hidden');
        this.elements.itemName.focus();
    }

    editItem(item) {
        this.state.editingItemId = item.id;
        this.elements.formTitle.innerHTML = '<i class="fas fa-edit"></i> Editar Plato';
        this.elements.saveButtonText.textContent = 'Guardar Cambios';
        
        this.elements.itemName.value = item.name;
        this.elements.itemDescription.value = item.description;
        this.elements.itemPrice.value = Utils.formatPriceInput(item.price.toString());
        this.elements.itemCategory.value = item.category;
        this.elements.itemImage.value = item.image;
        
        this.elements.itemFormModal.classList.remove('hidden');
        this.elements.itemName.focus();
    }

    deleteItem(id) {
        const item = this.state.menuItems.find(item => item.id === id);
        if (confirm(`¿Estás seguro de que quieres eliminar "${item?.name}"?`)) {
            this.state.menuItems = this.state.menuItems.filter(item => item.id !== id);
            this.state.saveMenuItems();
            this.renderMenu();
            Utils.showNotification('Plato eliminado correctamente', 'success');
        }
    }

    hideItemForm() {
        this.elements.itemFormModal.classList.add('hidden');
        this.clearItemForm();
    }

    clearItemForm() {
        this.elements.itemName.value = '';
        this.elements.itemDescription.value = '';
        this.elements.itemPrice.value = '';
        this.elements.itemCategory.value = 'Menu Pikaos';
        this.elements.itemImage.value = '';
    }

    saveItem(e) {
        e.preventDefault();
        
        const name = this.elements.itemName.value.trim();
        const description = this.elements.itemDescription.value.trim();
        const priceText = this.elements.itemPrice.value.replace(/\D/g, '');
        const price = parseInt(priceText) || 0;
        const category = this.elements.itemCategory.value;
        const image = this.elements.itemImage.value.trim() || 'https://via.placeholder.com/300x200/facc15/000000?text=Sin+Imagen';
        
        if (!name || !description || price <= 0) {
            Utils.showNotification('Por favor completa todos los campos correctamente', 'error');
            return;
        }
        
        if (this.state.editingItemId) {
            // Editar item existente
            const itemIndex = this.state.menuItems.findIndex(item => item.id === this.state.editingItemId);
            if (itemIndex !== -1) {
                this.state.menuItems[itemIndex] = {
                    ...this.state.menuItems[itemIndex],
                    name,
                    description,
                    price,
                    category,
                    image
                };
                Utils.showNotification('Plato actualizado correctamente', 'success');
            }
        } else {
            // Agregar nuevo item
            const newItem = {
                id: Utils.generateId(),
                name,
                description,
                price,
                category,
                image
            };
            this.state.menuItems.push(newItem);
            Utils.showNotification('Plato agregado correctamente', 'success');
        }
        
        this.state.saveMenuItems();
        this.hideItemForm();
        this.renderMenu();
    }
}

// Inicializar la aplicación
let app;

document.addEventListener('DOMContentLoaded', function() {
    app = new PikaosApp();
    
    // Agregar estilos para las animaciones
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
});

// Exportar para uso global si es necesario
window.PikaosApp = PikaosApp;