import pandas as pd
import streamlit as st
from fuzzywuzzy import fuzz

# Load dataset - ensure this CSV is in the same directory as app.py
@st.cache_data
def load_data():
    df = pd.read_csv('Dataset.csv')
    df.columns = df.columns.str.strip()  # Clean column names
    df.fillna('', inplace=True)          # Fill missing values
    return df

df = load_data()

def score_row(row, query):
    score = 0
    # Exact match for Occasion (case insensitive)
    if query.get('occasion') and query['occasion'].lower() == row['Occasion'].lower():
        score += 5
    # Fuzzy match Style Name
    if query.get('style_name'):
        score += fuzz.partial_ratio(query['style_name'].lower(), row['Style Name'].lower())
    # Fuzzy match Top, Bottom, Layer, Dresses
    for key, colname in [('top', 'Top'), ('bottom', 'Bottom'), ('layer', 'Layer'), ('dresses', 'Dresses')]:
        if query.get(key):
            score += fuzz.partial_ratio(query[key].lower(), row[colname].lower())
    return score

def recommend_outfits(df, query, top_n=5):
    df['score'] = df.apply(score_row, axis=1, query=query)
    results = df[df['score'] > 0].sort_values(by='score', ascending=False)
    return results.head(top_n)

def main():
    st.title("Outfit Recommendation System")

    occasion = st.selectbox("Select Occasion", options=["", "Casual", "Dinner Date", "Day Out", "Loungewear"])
    style_name = st.text_input("Enter Style Name (optional)")
    top = st.text_input("Enter Top (optional)")
    bottom = st.text_input("Enter Bottom (optional)")
    layer = st.text_input("Enter Layer (optional)")
    dresses = st.text_input("Enter Dresses (optional)")

    if st.button("Get Recommendations"):
        user_query = {
            'occasion': occasion,
            'style_name': style_name,
            'top': top,
            'bottom': bottom,
            'layer': layer,
            'dresses': dresses
        }
        recommendations = recommend_outfits(df, user_query)
        if not recommendations.empty:
            st.subheader("Top Recommendations:")
            for idx, row in recommendations.iterrows():
                st.markdown(f"### Outfit #{idx + 1}")
                st.write(f"**Top:** {row['Top'] or '-'}")
                st.write(f"**Bottom:** {row['Bottom'] or '-'}")
                st.write(f"**Layer:** {row['Layer'] or '-'}")
                st.write(f"**Dresses:** {row['Dresses'] or '-'}")
                st.write(f"**Occasion:** {row['Occasion'] or '-'}")
                st.write(f"**Style Name:** {row['Style Name'] or '-'}")
                st.write(f"**Notes:** {row['Notes'] or '-'}")
                st.write(f"**Score:** {row['score']}")
                st.markdown("---")
        else:
            st.warning("No recommendations found. Please try different criteria.")

if __name__ == "__main__":
    main()
