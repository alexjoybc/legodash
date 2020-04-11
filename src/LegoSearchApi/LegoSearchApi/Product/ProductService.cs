using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Client.Abstractions;
using GraphQL.Client.Http;
using GraphQL.Client.Serializer.Newtonsoft;
using Microsoft.Extensions.Caching.Distributed;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace LegoSearchApi.Product
{
    public class ProductService : IProductService
    {

        private IDistributedCache distributedCache;

        public ProductService(IDistributedCache distributedCache)
        {
            this.distributedCache = distributedCache;
        }


        public async Task<LegoProduct> Get(int id, CancellationToken cancellationToken)
        {

            var fromCache = await GetFromCache(id, cancellationToken);

            if (fromCache != null) return fromCache;

            var graphQLClient = new GraphQLHttpClient("https://www.lego.com/api/graphql/", new NewtonsoftJsonSerializer());


            var userJoinedRequest = new GraphQLRequest
            {
                Query = @"query ProductDetailsQuery($slug: String!, $visibility: ProductVisibility, $hideTargetedSections: Boolean) {
  product(slug: $slug, visibility: $visibility) {
    ...ProductDetails_Product
    ...ProductFeatures_Product
    ...ProductOverview_Product
    ...ProductMediaViewer_Media
    ...Product_ProductItem
    contentSections {
      ... on LayoutSection {
        ...ProductLayoutSection
        __typename
      }
      ...ProductContentSections
      ... on ProductCarouselSection {
        ...ProductCarousel_UniqueFields
        productCarouselProducts: products(page: 1, perPage: 16, sort: {key: FEATURED, direction: DESC}) {
          ...Product_ProductItem
          __typename
        }
        __typename
      }
      ... on SplitTestingSection {
        variantId
        testId
        optimizelyEntityId
        inExperimentAudience
        hidden(hideTargetedSections: $hideTargetedSections)
        section {
          ... on LayoutSection {
            ...ProductLayoutSection
            __typename
          }
          ...ProductContentSections
          ... on ProductCarouselSection {
            ...ProductCarousel_UniqueFields
            productCarouselProducts: products(page: 1, perPage: 16, sort: {key: FEATURED, direction: DESC}) {
              ...Product_ProductItem
              __typename
            }
            __typename
          }
          __typename
        }
        __typename
      }
      ... on TargetedSection {
        hidden(hideTargetedSections: $hideTargetedSections)
        section {
          ... on LayoutSection {
            ...ProductLayoutSection
            __typename
          }
          ...ProductContentSections
          ... on ProductCarouselSection {
            ...ProductCarousel_UniqueFields
            productCarouselProducts: products(page: 1, perPage: 16, sort: {key: FEATURED, direction: DESC}) {
              ...Product_ProductItem
              __typename
            }
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}

fragment ProductDetails_Product on Product {
  id
  productCode
  name
  slug
  metaTitle
  metaDescription
  ... on SingleVariantProduct {
    variant {
      ...Variant_ProductDetails
      __typename
    }
    __typename
  }
  ... on MultiVariantProduct {
    variants {
      ...Variant_ProductDetails
      __typename
    }
    __typename
  }
  ... on ReadOnlyProduct {
    readOnlyVariant {
      attributes {
        pieceCount
        ageRange
        has3DModel
        __typename
      }
      __typename
    }
    __typename
  }
  socialImage: primaryImage(size: HIRES)
  __typename
}

fragment Variant_ProductDetails on ProductVariant {
  vipPoints
  attributes {
    availabilityStatus
    availabilityText
    vipAvailabilityStatus
    vipAvailabilityText
    canAddToBag
    vipCanAddToBag
    ageRange
    pieceCount
    has3DModel
    headlineText
    isNew
    onSale
    rating
    __typename
  }
  __typename
}

fragment ProductFeatures_Product on Product {
  id
  productCode
  featuresPrimaryImage: primaryImage(size: HIRES)
  productImages {
    items {
      id
      __typename
    }
    __typename
  }
  productMedia {
    items {
      id
      __typename
    }
    __typename
  }
  name
  description
  secondaryImage(size: THUMBNAIL)
  ... on SingleVariantProduct {
    variant {
      ...Variant_ProductFeatures
      __typename
    }
    __typename
  }
  ... on MultiVariantProduct {
    variants {
      ...Variant_ProductFeatures
      __typename
    }
    __typename
  }
  __typename
}

fragment Variant_ProductFeatures on ProductVariant {
  attributes {
    canAddToBag
    bulletText
    __typename
  }
  images {
    url
    __typename
  }
  __typename
}

fragment ProductOverview_Product on Product {
  id
  name
  productCode
  metaTitle
  productCategories {
    name
    url
    __typename
  }
  brandCategory {
    url
    name
    logoUrl
    __typename
  }
  ... on ReadOnlyProduct {
    readOnlyVariant {
      id
      sku
      attributes {
        safetyWarning {
          key
          label
          __typename
        }
        featuredFlags {
          key
          label
          __typename
        }
        has3DModel
        __typename
      }
      __typename
    }
    __typename
  }
  ... on SingleVariantProduct {
    variant {
      ...Variant_ProductOverview
      __typename
    }
    __typename
  }
  ... on MultiVariantProduct {
    variants {
      ...Variant_ProductOverview
      __typename
    }
    __typename
  }
  __typename
}

fragment Variant_ProductOverview on ProductVariant {
  id
  sku
  price {
    centAmount
    formattedAmount
    __typename
  }
  listPrice {
    centAmount
    formattedAmount
    formattedValue
    __typename
  }
  salePercentage
  attributes {
    canAddToBag
    vipCanAddToBag
    canAddToWishlist
    availabilityStatus
    availabilityText
    vipAvailabilityStatus
    vipAvailabilityText
    onSale
    rating
    emergencyText
    maxOrderQuantity
    skuSelectorValue
    showStoreInventory
    safetyWarning {
      key
      label
      __typename
    }
    has3DModel
    ...ProductAttributes_Flags
    __typename
  }
  ...ProductTargettedContent_Promotion
  __typename
}

fragment ProductTargettedContent_Promotion on ProductVariant {
  promotion {
    text
    image
    linkText
    tooltipText
    countdownDate
    __typename
  }
  __typename
}

fragment ProductAttributes_Flags on ProductAttributes {
  featuredFlags {
    key
    label
    __typename
  }
  __typename
}

fragment ProductMediaViewer_Media on Product {
  ... on SingleVariantProduct {
    variant {
      ...Attributes
      __typename
    }
    __typename
  }
  ... on MultiVariantProduct {
    variants {
      ...Attributes
      __typename
    }
    __typename
  }
  mediaViewerPrimaryImage: primaryImage(size: HIRES)
  productMedia {
    items {
      ...ProductMediaItem
      __typename
    }
    __typename
  }
  __typename
}

fragment Attributes on ProductVariant {
  attributes {
    rating
    ...ProductAttributes_Flags
    __typename
  }
  __typename
}

fragment ProductMediaItem on ProductMedia {
  id
  ... on ProductImage {
    ...ProductZoomableImage
    __typename
  }
  ... on ProductVideo {
    ...VideoMedia
    __typename
  }
  __typename
}

fragment VideoMedia on ProductVideo {
  video {
    url
    thumbnailUrl
    __typename
  }
  __typename
}

fragment ProductZoomableImage on ProductImage {
  baseImgUrl
  sizes {
    desktop {
      url
      thumbnailUrl
      highResUrl
      fullscreenUrl
      __typename
    }
    mobile {
      url
      thumbnailUrl
      highResUrl
      fullscreenUrl
      __typename
    }
    tablet {
      url
      thumbnailUrl
      highResUrl
      fullscreenUrl
      __typename
    }
    __typename
  }
  __typename
}

fragment Product_ProductItem on Product {
  __typename
  id
  productCode
  name
  slug
  primaryImage(size: THUMBNAIL)
  baseImgUrl: primaryImage
  overrideUrl
  ... on ReadOnlyProduct {
    readOnlyVariant {
      ...Variant_ReadOnlyProduct
      __typename
    }
    __typename
  }
  ... on SingleVariantProduct {
    variant {
      ...Variant_ListingProduct
      __typename
    }
    __typename
  }
  ... on MultiVariantProduct {
    variants {
      ...Variant_ListingProduct
      __typename
    }
    __typename
  }
}

fragment Variant_ListingProduct on ProductVariant {
  id
  sku
  salePercentage
  attributes {
    rating
    maxOrderQuantity
    availabilityStatus
    availabilityText
    vipAvailabilityStatus
    vipAvailabilityText
    canAddToBag
    canAddToWishlist
    vipCanAddToBag
    onSale
    isNew
    ...ProductAttributes_Flags
    __typename
  }
  ...ProductVariant_Pricing
  __typename
}

fragment ProductVariant_Pricing on ProductVariant {
  price {
    formattedAmount
    centAmount
    currencyCode
    formattedValue
    __typename
  }
  listPrice {
    formattedAmount
    centAmount
    __typename
  }
  attributes {
    onSale
    __typename
  }
  __typename
}

fragment Variant_ReadOnlyProduct on ReadOnlyVariant {
  id
  sku
  attributes {
    featuredFlags {
      key
      label
      __typename
    }
    __typename
  }
  __typename
}

fragment ListingBanner on ListingBannerSection {
  title
  description
  contrast
  logoImage
  images {
    size
    url
    __typename
  }
  backgroundImages {
    small {
      url
      width
      height
      maxPixelDensity
      format
      __typename
    }
    medium {
      url
      width
      height
      maxPixelDensity
      format
      __typename
    }
    large {
      url
      width
      height
      maxPixelDensity
      format
      __typename
    }
    __typename
  }
  __typename
}

fragment CardContent on CardContentSection {
  moduleTitle
  showModuleTitle
  blocks {
    title
    isH1
    description
    textAlignment
    logo
    secondaryLogo
    primaryLogoSrc {
      url
      width
      height
      maxPixelDensity
      format
      __typename
    }
    secondaryLogoSrc {
      url
      width
      height
      maxPixelDensity
      format
      __typename
    }
    logoPosition
    image
    imageSrc {
      url
      width
      height
      maxPixelDensity
      format
      __typename
    }
    callToActionText
    callToActionLink
    altText
    contrast
    __typename
  }
  __typename
}

fragment CopySectionData on CopySection {
  title
  showTitle
  body
  __typename
}

fragment QuickLinksData on QuickLinkSection {
  title
  quickLinks {
    title
    isH1
    image
    link
    openInNewTab
    contrast
    imageSrc {
      url
      width
      height
      maxPixelDensity
      format
      __typename
    }
    __typename
  }
  __typename
}

fragment ContentBlockMixedData on ContentBlockMixed {
  moduleTitle
  showModuleTitle
  blocks {
    title
    isH1
    description
    backgroundColor
    blockTheme
    contentPosition
    logoURL
    logoPosition
    callToActionText
    callToActionLink
    altText
    backgroundImages {
      largeImage {
        small {
          url
          width
          height
          maxPixelDensity
          format
          __typename
        }
        large {
          url
          width
          height
          maxPixelDensity
          format
          __typename
        }
        __typename
      }
      smallImage {
        small {
          url
          width
          height
          maxPixelDensity
          format
          __typename
        }
        large {
          url
          width
          height
          maxPixelDensity
          format
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}

fragment HeroBannerData on HeroBanner {
  heroblocks {
    id
    title
    isH1
    tagline
    bannerTheme
    contentVerticalPosition
    contentHorizontalPosition
    contentHeight
    primaryLogoSrc
    primaryLogoSrcNew {
      url
      width
      height
      maxPixelDensity
      format
      __typename
    }
    secondaryLogoSrc
    secondaryLogoSrcNew {
      url
      width
      height
      maxPixelDensity
      format
      __typename
    }
    videoMedia {
      url
      id
      __typename
    }
    logoPosition
    contentBackground
    callToActionText
    callToActionLink
    secondaryCallToActionText
    secondaryCallToActionLink
    secondaryOpenInNewTab
    backgroundImagesNew {
      small {
        url
        width
        height
        maxPixelDensity
        format
        __typename
      }
      medium {
        url
        width
        height
        maxPixelDensity
        format
        __typename
      }
      large {
        url
        width
        height
        maxPixelDensity
        format
        __typename
      }
      __typename
    }
    backgroundImages {
      small
      medium
      large
      __typename
    }
    altText
    __typename
  }
  __typename
}

fragment SidekickBannerData on SidekickBanner {
  __typename
  id
  sidekickBlocks {
    title
    isH1
    text
    textAlignment
    contrast
    backgroundColor
    logo
    secondaryLogo
    logoPosition
    ctaTextPrimary: ctaText
    ctaLinkPrimary: ctaLink
    ctaTextSecondary
    ctaLinkSecondary
    contentHeight
    bgImages {
      large
      __typename
    }
    videoMedia {
      url
      id
      __typename
    }
    altText
    __typename
  }
}

fragment ProductCarousel_UniqueFields on ProductCarouselSection {
  __typename
  productCarouselTitle: title
  showTitle
  showAddToBag
  seeAllLink
}

fragment MotionBannerData on MotionBanner {
  motionBannerBlocks {
    id
    title
    isH1
    tagline
    bannerTheme
    contentHorizontalPosition
    primaryLogoSrc {
      url
      width
      height
      maxPixelDensity
      format
      __typename
    }
    secondaryLogoSrc {
      url
      width
      height
      maxPixelDensity
      format
      __typename
    }
    animatedMedia
    videoMedia {
      url
      id
      __typename
    }
    logoPosition
    contentBackground
    callToActionText
    callToActionLink
    backgroundImages {
      small {
        url
        width
        height
        maxPixelDensity
        format
        __typename
      }
      medium {
        url
        width
        height
        maxPixelDensity
        format
        __typename
      }
      large {
        url
        width
        height
        maxPixelDensity
        format
        __typename
      }
      __typename
    }
    altText
    __typename
  }
  __typename
}

fragment MotionSidekickData on MotionSidekick {
  motionSidekickBlocks {
    id
    title
    isH1
    tagline
    bannerTheme
    contentHorizontalPosition
    primaryLogoSrc {
      url
      width
      height
      maxPixelDensity
      format
      __typename
    }
    secondaryLogoSrc {
      url
      width
      height
      maxPixelDensity
      format
      __typename
    }
    animatedMedia
    videoMedia {
      url
      id
      __typename
    }
    logoPosition
    contentBackground
    callToActionText
    callToActionLink
    backgroundImages {
      small {
        url
        width
        height
        maxPixelDensity
        format
        __typename
      }
      medium {
        url
        width
        height
        maxPixelDensity
        format
        __typename
      }
      large {
        url
        width
        height
        maxPixelDensity
        format
        __typename
      }
      __typename
    }
    altText
    __typename
  }
  __typename
}

fragment TextBlockData on TextBlock {
  textBlocks {
    title
    isH1
    text
    textAlignment
    contrast
    backgroundColor
    callToActionLink
    callToActionText
    openInNewTab
    secondaryCallToActionLink
    secondaryCallToActionText
    secondaryOpenInNewTab
    __typename
  }
  __typename
}

fragment ProductContentSections on ContentSection {
  __typename
  id
  ...ListingBanner
  ...CardContent
  ...CopySectionData
  ...QuickLinksData
  ...ContentBlockMixedData
  ...HeroBannerData
  ...SidekickBannerData
  ...MotionBannerData
  ...MotionSidekickData
  ...TextBlockData
}

fragment ProductLayoutSection on LayoutSection {
  __typename
  id
  backgroundColor
  removePadding
  fullWidth
  innerSection: section {
    ...ProductContentSections
    ... on ProductCarouselSection {
      ...ProductCarousel_UniqueFields
      productCarouselProducts: products(page: 1, perPage: 16, sort: {key: FEATURED, direction: DESC}) {
        ...Product_ProductItem
        __typename
      }
      __typename
    }
    __typename
  }
}",
                Variables = $"{{\"slug\": \"{id}\", \"hideTargetedSections\": false}}"
            };

            graphQLClient.HttpClient.DefaultRequestHeaders.Add("x-locale", "en-CA");

            var graphQLResponse = await graphQLClient.SendQueryAsync<LegoProductRoot>(userJoinedRequest);

            if (graphQLResponse.Data.product != null)
            {
                await Cache(graphQLResponse.Data.product, cancellationToken);
            }

            return graphQLResponse.Data.product;

        }


        private async Task<LegoProduct> GetFromCache(int id, CancellationToken cancellationToken)
        {

            var result = await this.distributedCache.GetStringAsync(id.ToString(), cancellationToken);

            if (result == null) return null;

            return JsonConvert.DeserializeObject<LegoProduct>(result);
        }


        private async Task Cache(LegoProduct legoProduct, CancellationToken cancellationToken)
        {
            string json = JsonConvert.SerializeObject(legoProduct);

            var options = new DistributedCacheEntryOptions();
            options.SetAbsoluteExpiration(DateTimeOffset.Now.AddHours(1));

            await this.distributedCache.SetStringAsync(legoProduct.productCode, JsonConvert.SerializeObject(legoProduct), options,  cancellationToken);
        }

    }
}