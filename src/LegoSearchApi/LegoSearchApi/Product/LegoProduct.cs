using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LegoSearchApi.Product
{
    public class SafetyWarning
    {
        public string key { get; set; }
        public string label { get; set; }
        public string __typename { get; set; }
    }

    public class Attributes
    {
        public string availabilityStatus { get; set; }
        public string availabilityText { get; set; }
        public object vipAvailabilityStatus { get; set; }
        public object vipAvailabilityText { get; set; }
        public bool canAddToBag { get; set; }
        public object vipCanAddToBag { get; set; }
        public string ageRange { get; set; }
        public int pieceCount { get; set; }
        public bool has3DModel { get; set; }
        public string headlineText { get; set; }
        public bool isNew { get; set; }
        public bool onSale { get; set; }
        public object rating { get; set; }
        public string __typename { get; set; }
        public string bulletText { get; set; }
        public bool canAddToWishlist { get; set; }
        public object emergencyText { get; set; }
        public int maxOrderQuantity { get; set; }
        public object skuSelectorValue { get; set; }
        public bool showStoreInventory { get; set; }
        public SafetyWarning safetyWarning { get; set; }
        public List<object> featuredFlags { get; set; }
    }

    public class Price
    {
        public int centAmount { get; set; }
        public string formattedAmount { get; set; }
        public string __typename { get; set; }
        public string currencyCode { get; set; }
        public double formattedValue { get; set; }
    }

    public class ListPrice
    {
        public int centAmount { get; set; }
        public string formattedAmount { get; set; }
        public double formattedValue { get; set; }
        public string __typename { get; set; }
    }

    public class Variant
    {
        public int vipPoints { get; set; }
        public Attributes attributes { get; set; }
        public string __typename { get; set; }
        public List<object> images { get; set; }
        public string id { get; set; }
        public string sku { get; set; }
        public Price price { get; set; }
        public ListPrice listPrice { get; set; }
        public int salePercentage { get; set; }
        public object promotion { get; set; }
    }

    public class Desktop
    {
        public string url { get; set; }
        public string thumbnailUrl { get; set; }
        public string highResUrl { get; set; }
        public string fullscreenUrl { get; set; }
        public string __typename { get; set; }
    }

    public class Mobile
    {
        public string url { get; set; }
        public string thumbnailUrl { get; set; }
        public string highResUrl { get; set; }
        public string fullscreenUrl { get; set; }
        public string __typename { get; set; }
    }

    public class Tablet
    {
        public string url { get; set; }
        public string thumbnailUrl { get; set; }
        public string highResUrl { get; set; }
        public string fullscreenUrl { get; set; }
        public string __typename { get; set; }
    }

    public class Sizes
    {
        public Desktop desktop { get; set; }
        public Mobile mobile { get; set; }
        public Tablet tablet { get; set; }
        public string __typename { get; set; }
    }

    public class Item
    {
        public string id { get; set; }
        public string __typename { get; set; }
        public string baseImgUrl { get; set; }
        public Sizes sizes { get; set; }
    }

    public class ProductMedia
    {
        public List<Item> items { get; set; }
        public string __typename { get; set; }
    }

    public class ProductCategory
    {
        public string name { get; set; }
        public string url { get; set; }
        public string __typename { get; set; }
    }

    public class BrandCategory
    {
        public string url { get; set; }
        public string name { get; set; }
        public string logoUrl { get; set; }
        public string __typename { get; set; }
    }

    public class LegoProduct
    {
        public string id { get; set; }
        public string productCode { get; set; }
        public string name { get; set; }
        public string slug { get; set; }
        public string metaTitle { get; set; }
        public string metaDescription { get; set; }
        public Variant variant { get; set; }
        public string __typename { get; set; }
        public string socialImage { get; set; }
        public string featuresPrimaryImage { get; set; }
        public object productImages { get; set; }
        public ProductMedia productMedia { get; set; }
        public string description { get; set; }
        public string secondaryImage { get; set; }
        public List<ProductCategory> productCategories { get; set; }
        public BrandCategory brandCategory { get; set; }
        public string mediaViewerPrimaryImage { get; set; }
        public string primaryImage { get; set; }
        public string baseImgUrl { get; set; }
        public object overrideUrl { get; set; }
        public List<object> contentSections { get; set; }
    }

    public class LegoProductRoot
    {
        public LegoProduct product { get; set; }
    }
}
