# CSV Product Integration Guide

## How to Connect Your CSV-Imported Products with the Custom Sections

### Step 1: Verify Your CSV Import
After uploading your CSV file to Shopify, ensure that:
- All products are properly imported
- Images are uploaded and linked
- Product descriptions are complete
- Variants are correctly set up
- Prices are properly formatted

### Step 2: Create a Collection (Recommended)
1. Go to your Shopify admin → **Products** → **Collections**
2. Click **Create collection**
3. Name it something like "CSV Imported Products" or "Featured Products"
4. Set the collection type to **Manual** or **Automated** (depending on your needs)
5. Add your CSV-imported products to this collection

### Step 3: Configure the Custom Grid Section
1. Go to your Shopify admin → **Online Store** → **Themes**
2. Click **Customize** on your active theme
3. Navigate to the page where you want to add the product grid
4. Click **Add section** → **Custom Product Grid**

### Step 4: Choose Your Display Method

#### Option A: Use Collection (Recommended for CSV Products)
1. In the section settings, check the box **"Use Collection Instead of Individual Products"**
2. Select your collection from the **Collection** dropdown
3. The grid will automatically display the first 6 products from your collection
4. Save your changes

#### Option B: Select Individual Products
1. Leave the collection option unchecked
2. Use the individual product pickers (Product 1, Product 2, etc.)
3. Select specific products from your CSV-imported products
4. Save your changes

### Step 5: Configure the Banner Section
1. Add the **Custom Banner** section to your page
2. Customize the text content:
   - Heading (e.g., "Our Latest Collection")
   - Subheading (e.g., "Discover Amazing Products")
   - Description
   - Button text and links
3. Upload a background image if desired
4. Save your changes

### Step 6: Test the Integration
1. Preview your page to ensure everything displays correctly
2. Test the Quick View functionality
3. Test the Add to Cart functionality
4. Verify that the special cart logic works (Black + Medium variant)

## Features Available with Your CSV Products

### ✅ What Works Automatically
- **Product Images**: Displayed from your CSV import
- **Product Titles**: Pulled from your product data
- **Product Prices**: Including sale prices and compare-at prices
- **Product Descriptions**: Full descriptions from your CSV
- **Product Variants**: All variants are available in the popup
- **Stock Status**: Shows "In Stock" or "Out of Stock"
- **Quick View**: Click to see full product details
- **Add to Cart**: Directly from the popup

### 🔧 Special Features
- **Responsive Design**: Works on all devices
- **Smooth Animations**: Hover effects and transitions
- **Cart Logic**: Special handling for Black + Medium variants
- **Error Handling**: User-friendly error messages
- **Loading States**: Visual feedback during cart operations

## Troubleshooting

### Products Not Showing
- Check that your collection contains products
- Verify that products are published and available
- Ensure the collection is selected in the section settings

### Images Not Displaying
- Verify that image URLs in your CSV are correct
- Check that images are uploaded to Shopify
- Ensure image permissions are set correctly

### Quick View Not Working
- Check browser console for JavaScript errors
- Verify that product data is properly formatted
- Ensure the popup snippet is included

### Cart Issues
- Check that variants are properly configured
- Verify product availability
- Test with different product types

## Advanced Configuration

### Customizing the Grid Layout
You can modify the CSS in the section files to:
- Change the number of columns
- Adjust spacing and sizing
- Modify colors and styling
- Add custom animations

### Adding More Products
To display more than 6 products:
1. Edit the `sections/grid-custom.liquid` file
2. Change the slice limit: `collection.products | slice: 0, 6` to your desired number
3. Update the grid CSS to accommodate more columns if needed

### Customizing the Popup
The popup can be customized in `snippets/popup-product.liquid`:
- Add more product information
- Modify the layout
- Change styling and animations
- Add custom fields

## Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify your Shopify product setup
3. Test with a simple product first
4. Contact support if needed

## Notes
- The code is designed to work with standard Shopify product data
- All features are built with vanilla JavaScript (no external dependencies)
- The design is fully responsive and mobile-friendly
- Cart functionality uses Shopify's official APIs
