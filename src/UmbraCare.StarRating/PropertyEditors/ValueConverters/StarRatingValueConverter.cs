using UmbraCare.StarRating.Models;
using Umbraco.Core.Models.PublishedContent;
using Umbraco.Core.PropertyEditors.ValueConverters;

namespace UmbraCare.StarRating.PropertyEditors.ValueConverters
{
    public class StarRatingValueConverter : DecimalValueConverter
    {
        public override bool IsConverter(IPublishedPropertyType propertyType)
            => StarRatingConstants.ProductAlias.Equals(propertyType.EditorAlias);
    }
}
